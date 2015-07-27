'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x2, _x3, _x4) { var _again = true; _function: while (_again) { var object = _x2, property = _x3, receiver = _x4; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x2 = parent; _x3 = property; _x4 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _events = require('events');

var _events2 = _interopRequireDefault(_events);

var _util = require('util');

var _util2 = _interopRequireDefault(_util);

var _dgram = require('dgram');

var _dgram2 = _interopRequireDefault(_dgram);

var _errors = require('./errors');

var MULTICAST_IP = '239.255.255.250';
var MULTICAST_PORT = 1900;
var SEARCH_MX = 3;

/**
 * TODO: Implement logic to listen for NOTIFY messages instead of running an
 *       M-Search on an interval.
 */

var UDP = (function (_EventEmitter) {
  _inherits(UDP, _EventEmitter);

  function UDP() {
    _classCallCheck(this, UDP);

    _get(Object.getPrototypeOf(UDP.prototype), 'constructor', this).call(this);
  }

  _createClass(UDP, [{
    key: 'start',
    value: function start() {
      this.socket = _dgram2['default'].createSocket('udp4');

      this.socket.on('listening', onListening.bind(this));
      this.socket.on('message', onMessage.bind(this));
      this.socket.on('close', onClose.bind(this));
      this.socket.on('error', onError.bind(this));

      this.socket.bind(MULTICAST_PORT);
    }
  }, {
    key: 'stop',
    value: function stop() {
      this.socket.close();
      this.socket = null;
    }
  }, {
    key: 'search',
    value: function search() {
      var _this = this;

      var searchTarget = arguments.length <= 0 || arguments[0] === undefined ? 'upnp:rootdevice' : arguments[0];

      var headers = new Buffer(['M-SEARCH * HTTP/1.1', 'HOST: ' + MULTICAST_IP + ':' + MULTICAST_PORT, 'MAN: "ssdp:discover"', 'MX: ' + SEARCH_MX, // seconds to delay
      'ST: ' + searchTarget // search target
      ].join('\r\n'));

      this.socket.send(headers, 0, headers.length, MULTICAST_PORT, MULTICAST_IP);

      this.emit('search/start');

      setTimeout(function () {
        _this.emit('search/complete');
      }, 3000);
    }
  }]);

  return UDP;
})(_events2['default']);

exports['default'] = UDP;

function parseMessage(message) {
  var parsed = {};

  message.toString().split('\r\n').filter(Boolean).forEach(function (line, i) {
    if (i) {
      var _line$match = line.match(/^([\w-]+):\s*(.*)$/i);

      var _line$match2 = _slicedToArray(_line$match, 3);

      var key = _line$match2[1];
      var value = _line$match2[2];

      parsed[key.toLowerCase()] = value;
    } else {
      switch (line.split(' ')[0]) {
        case 'M-SEARCH':
          parsed.type = 'search';
          break;
        case 'NOTIFY':
          parsed.type = 'notification';
          break;
        default:
          parsed.type = 'found';
          break;
      }
    }
  });

  return parsed;
}

function onListening() {
  this.socket.addMembership(MULTICAST_IP);
  this.search();
  this.emit('listening');
}

function onMessage(message, rinfo) {
  var parsed = parseMessage(message);

  // searches won't include a server header, so they are filtered out
  // automatically for us
  if (parsed.server && /sonos/i.test(parsed.server)) {
    if (parsed.type === 'found') {
      this.emit('found', {
        address: rinfo.address,
        description: parsed.location
      });
    } else if (parsed.type === 'notification') {
      this.emit('notification', parsed, rinfo);
    }
  }
}

function onClose() {
  this.emit('close');
}

function onError(error) {
  this.emit('error', new SSDPError(error.message));
}
module.exports = exports['default'];