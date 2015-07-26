'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x28, _x29, _x30) { var _again = true; _function: while (_again) { var object = _x28, property = _x29, receiver = _x30; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x28 = parent; _x29 = property; _x30 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _events = require('events');

var _events2 = _interopRequireDefault(_events);

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _util = require('util');

var _util2 = _interopRequireDefault(_util);

var _errors = require('./errors');

var _upnp = require('./upnp');

/**
 * Represents a Sonos device and allows us to call actions for that device.
 */

var _upnp2 = _interopRequireDefault(_upnp);

var Device = (function (_EventEmitter) {
  _inherits(Device, _EventEmitter);

  function Device(deviceInfo) {
    var _this = this;

    _classCallCheck(this, Device);

    _get(Object.getPrototypeOf(Device.prototype), 'constructor', this).call(this);

    // seed the device object with the known ip and device description url
    Object.assign(this, deviceInfo);

    // query the device for its description
    _upnp2['default'].get(this.location).then(function (response) {
      Object.assign(_this, response.device);

      _this.refresh();
      _this.emit('ready');
    })['catch'](function (error) {
      _this.emit('error', new _errors.DeviceError(error.message));
    });
  }

  /**
   * Refreshes the device
   *
   * @returns  {[type]}  [description]
   */

  _createClass(Device, [{
    key: 'refresh',
    value: function refresh() {
      var seconds = arguments.length <= 0 || arguments[0] === undefined ? 1800 : arguments[0];

      if (this.expireTimeout) {
        clearTimeout(this.expireTimeout);
      }

      // set the device to expire in 30 minutes and let subsequent ssdp:alive
      // messages refresh the device
      this.expireTimeout = setTimeout(this.expire.bind(this), 1000 * seconds);
      this.emit('refreshed');
    }
  }, {
    key: 'expire',
    value: function expire() {
      this.expireTimeout = null;
      this.emit('expired');
    }
  }, {
    key: 'getVolume',
    value: function getVolume() {
      var InstanceID = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];
      var Channel = arguments.length <= 1 || arguments[1] === undefined ? 'Master' : arguments[1];

      var data = {
        InstanceID: InstanceID,
        Channel: Channel
      };

      return this._doAction('GetVolume', data);
    }
  }, {
    key: 'setVolume',
    value: function setVolume() {
      var DesiredVolume = arguments.length <= 0 || arguments[0] === undefined ? 30 : arguments[0];
      var InstanceID = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];
      var Channel = arguments.length <= 2 || arguments[2] === undefined ? 'Master' : arguments[2];

      var data = {
        InstanceID: InstanceID,
        Channel: Channel,
        DesiredVolume: DesiredVolume
      };

      return this._doAction('SetVolume', data);
    }
  }, {
    key: 'getMute',
    value: function getMute() {
      var InstanceID = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];
      var Channel = arguments.length <= 1 || arguments[1] === undefined ? 'Master' : arguments[1];

      var data = {
        InstanceID: InstanceID,
        Channel: Channel
      };

      return this._doAction('GetMute', data);
    }
  }, {
    key: 'setMute',
    value: function setMute() {
      var DesiredMute = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];
      var InstanceID = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];
      var Channel = arguments.length <= 2 || arguments[2] === undefined ? 'Master' : arguments[2];

      var data = {
        InstanceID: InstanceID,
        Channel: Channel,
        DesiredMute: DesiredMute
      };

      return this._doAction('SetMute', data);
    }
  }, {
    key: 'getMediaInfo',
    value: function getMediaInfo() {
      var InstanceID = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];

      return this._doAction('GetMediaInfo', { InstanceID: InstanceID });
    }
  }, {
    key: 'getTransportInfo',
    value: function getTransportInfo() {
      var InstanceID = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];

      return this._doAction('GetTransportInfo', { InstanceID: InstanceID });
    }
  }, {
    key: 'getPositionInfo',
    value: function getPositionInfo() {
      var InstanceID = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];

      return this._doAction('GetPositionInfo', { InstanceID: InstanceID });
    }
  }, {
    key: 'getDeviceCapabilities',
    value: function getDeviceCapabilities() {
      var InstanceID = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];

      return this._doAction('GetDeviceCapabilities', { InstanceID: InstanceID });
    }
  }, {
    key: 'getTransportSettings',
    value: function getTransportSettings() {
      var InstanceID = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];

      return this._doAction('GetTransportSettings', { InstanceID: InstanceID });
    }
  }, {
    key: 'getCrossfadeMode',
    value: function getCrossfadeMode() {
      var InstanceID = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];

      return this._doAction('GetCrossfadeMode', { InstanceID: InstanceID });
    }
  }, {
    key: 'setCrossfadeMode',
    value: function setCrossfadeMode() {
      var CrossfadeMode = arguments.length <= 0 || arguments[0] === undefined ? false : arguments[0];

      var data = {
        InstanceID: InstanceID,
        CrossfadeMode: CrossfadeMode
      };

      return this._doAction('SetPlayMode', data);
    }
  }, {
    key: 'setPlayMode',
    value: function setPlayMode() {
      var NewPlayMode = arguments.length <= 0 || arguments[0] === undefined ? 'NORMAL' : arguments[0];
      var InstanceID = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];

      var data = {
        InstanceID: InstanceID,
        NewPlayMode: NewPlayMode
      };

      return this._doAction('SetPlayMode', data);
    }
  }, {
    key: 'stop',
    value: function stop() {
      var InstanceID = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];

      return this._doAction('Stop', { InstanceID: InstanceID });
    }
  }, {
    key: 'play',
    value: function play() {
      var Speed = arguments.length <= 0 || arguments[0] === undefined ? 1 : arguments[0];
      var InstanceID = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];

      var data = {
        InstanceID: InstanceID,
        Speed: Speed
      };

      return this._doAction('Play', data);
    }
  }, {
    key: 'pause',
    value: function pause() {
      var InstanceID = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];

      return this._doAction('Pause', { InstanceID: InstanceID });
    }
  }, {
    key: 'seek',
    value: function seek() {}
  }, {
    key: 'next',
    value: function next() {
      var InstanceID = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];

      return this._doAction('Next', { InstanceID: InstanceID });
    }
  }, {
    key: 'previous',
    value: function previous() {
      var InstanceID = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];

      return this._doAction('Previous', { InstanceID: InstanceID });
    }
  }, {
    key: 'getCurrentTransportActions',
    value: function getCurrentTransportActions() {
      var InstanceID = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];

      return this._doAction('GetCurrentTransportActions', { InstanceID: InstanceID });
    }
  }, {
    key: '_doAction',
    value: function _doAction(action, data) {
      var _this2 = this;

      return _upnp2['default'].post(this.address, action, data).then(function (response) {
        return response;
      })['catch'](function (error) {
        _this2.emit('error', new _errors.DeviceError(action + ': ' + error.message));
      });
    }
  }]);

  return Device;
})(_events2['default']);

exports['default'] = Device;
module.exports = exports['default'];