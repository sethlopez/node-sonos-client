'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _errors = require('./errors');

var _xml2js = require('xml2js');

var xml2js = _interopRequireWildcard(_xml2js);

var xmlParser = new xml2js.Parser({
  trim: true, // trim the whitespace from values
  explicitRoot: false, // no root node
  explicitArray: false, // use arrays only when necessary
  ignoreAttrs: true, // no attributes
  async: true // don't block
});
var xmlBuilder = new xml2js.Builder({
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
    value: function post(address, action, data) {
      var _soapLookup = soapLookup(action);

      var endpoint = _soapLookup.endpoint;
      var service = _soapLookup.service;

      var payload = envelop(data, action, service);
      var options = {
        host: address,
        port: 1400,
        method: 'POST',
        path: endpoint,
        headers: {
          'SOAPAction': service + '#' + action,
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
          reject(new UPnP(error));
        });

        request.write(payload);
        request.end();
      });
    }
  }]);

  return UPnP;
})();

exports['default'] = UPnP;

function soapLookup(action) {
  var soap = {};

  switch (action) {
    // DeviceProperties
    case 'GetLEDState':
    case 'SetLEDState':
      soap.endpoint = '/DeviceProperties/Control';
      soap.service = 'urn:schemas-upnp-org:service:DeviceProperties:1';
      break;
    // SystemProperties
    case 'SetString':
      break;
    // RederingControl
    case 'GetVolume':
    case 'SetVolume':
    case 'GetMute':
    case 'SetMute':
      soap.endpoint = '/MediaRenderer/RenderingControl/Control';
      soap.service = 'urn:schemas-upnp-org:service:RenderingControl:1';
      break;
    // AVTransport
    case 'GetMediaInfo':
    case 'GetTransportInfo':
    case 'GetPositionInfo':
    case 'GetDeviceCapabilities':
    case 'GetTransportSettings':
    case 'GetCrossfadeMode':
    case 'SetPlayMode':
    case 'SetCrossfadeMode':
    case 'Play':
    case 'Pause':
    case 'Stop':
    case 'Seek':
    case 'Next':
    case 'Previous':
    case 'GetCurrentTransportActions':
    case 'ChangeTransportSettings':
      soap.endpoint = '/MediaRenderer/AVTransport/Control';
      soap.service = 'urn:schemas-upnp-org:service:AVTransport:1';
      break;
    default:
      throw new Error(action + ' is not a valid SOAP action.');
      break;
  }

  return soap;
}

function envelop(data, action, service) {
  var actionKey = 'u:' + action;
  var actionObject = {
    // these attributes will go on the root node
    '$': {
      'xmlns:s': 'http://schemas.xmlsoap.org/soap/envelope/',
      's:encodingStyle': 'http://schemas.xmlsoap.org/soap/encoding/'
    },
    // create an empty body to assign data to later
    's:Body': {}
  };

  actionObject['s:Body'][actionKey] = Object.assign({}, data, {
    '$': {
      'xmlns:u': service
    }
  });

  return xmlBuilder.buildObject(actionObject);
}
module.exports = exports['default'];