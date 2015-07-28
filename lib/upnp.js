'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _errors = require('./errors');

var _xml2js = require('xml2js');

var _xml2js2 = _interopRequireDefault(_xml2js);

var xmlParser = new _xml2js2['default'].Parser({
  trim: true, // trim the whitespace from values
  explicitRoot: false, // no root node
  explicitArray: false, // use arrays only when necessary
  ignoreAttrs: true, // no attributes
  async: true // don't block
});
var xmlBuilder = new _xml2js2['default'].Builder({
  rootName: 's:Envelope',
  xmldec: {
    'version': '1.0',
    'encoding': 'UTF-8'
  }
});

/**
 * Acts as the communication layer between our code and the Sonos devices.
 */

var UPnP = (function () {
  function UPnP() {
    _classCallCheck(this, UPnP);
  }

  _createClass(UPnP, null, [{
    key: 'get',

    /**
     * Gets the device description XML from the given URL and return a parsed
     * XML description.
     *
     * @param    {String}  url  The URL for the device description.
     *
     * @returns  {Object}       The parsed XML device description.
     */
    value: function get(url) {
      return new Promise(function (resolve, reject) {
        _http2['default'].get(url, function (response) {
          response.body = '';
          response.on('data', function (chunk) {
            response.body += chunk;
          });
          response.on('end', function () {
            xmlParser.parseString(response.body, function (error, result) {
              if (error) {
                console.log('xmlParser error');
                reject(new _errors.UPnPError(error));
              } else {
                resolve(result);
              }
            });
          });
        }).on('error', function (error) {
          console.log('http.get error');
          reject(new _errors.UPnPError(error.message));
        });
      });
    }
  }, {
    key: 'post',
    value: function post(address, endpoint, serviceType, action, data) {
      var payload = envelop(serviceType, action, data);
      var options = {
        host: address,
        port: 1400,
        method: 'POST',
        path: endpoint,
        headers: {
          'SOAPAction': serviceType + '#' + action,
          'Content-Type': 'text/xml; charset=utf8',
          'Content-Length': payload.length
        }
      };

      return new Promise(function (resolve, reject) {
        var request = _http2['default'].request(options, function (response) {
          response.body = '';
          response.on('data', function (chunk) {
            response.body += chunk;
          });
          response.on('end', function () {
            xmlParser.parseString(response.body, function (error, result) {
              if (error) {
                console.log('xmlParser error');
                reject(new _errors.UPnPError(error));
              } else {
                if (result.hasOwnProperty('s:Body') && !result['s:Body'].hasOwnProperty('s:Fault') && result['s:Body'].hasOwnProperty('u:' + action + 'Response')) {
                  resolve(result['s:Body']['u:' + action + 'Response'] || null);
                } else {
                  reject(new _errors.UPnPError('An error occurred while performing ' + action + '. ' + error));
                }
              }
            });
          });
        }).on('error', function (error) {
          console.log('http.request error');
          reject(error);
        });

        request.write(payload);
        request.end();
      });
    }
  }]);

  return UPnP;
})();

exports['default'] = UPnP;

function envelop(serviceType, action, data) {
  var tagName = 'u:' + action;
  var xmlData = {
    // these attributes will go on the root node
    '$': {
      'xmlns:s': 'http://schemas.xmlsoap.org/soap/envelope/',
      's:encodingStyle': 'http://schemas.xmlsoap.org/soap/encoding/'
    },
    // create an empty body to assign data to later
    's:Body': {}
  };

  xmlData['s:Body'][tagName] = Object.assign({}, data, {
    '$': {
      'xmlns:u': serviceType
    }
  });

  console.log(JSON.stringify(xmlData, null, 2));

  return xmlBuilder.buildObject(xmlData);
}
module.exports = exports['default'];