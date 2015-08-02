'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x2, _x3, _x4) { var _again = true; _function: while (_again) { var object = _x2, property = _x3, receiver = _x4; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x2 = parent; _x3 = property; _x4 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _service = require('./service');

var _service2 = _interopRequireDefault(_service);

var DeviceProperties = (function (_Service) {
  _inherits(DeviceProperties, _Service);

  function DeviceProperties(player) {
    _classCallCheck(this, DeviceProperties);

    _get(Object.getPrototypeOf(DeviceProperties.prototype), 'constructor', this).call(this);

    this.player = player;
    this.endpoint = '/DeviceProperties/Control';
    this.serviceType = 'urn:schemas-upnp-org:service:DeviceProperties:1';
  }

  _createClass(DeviceProperties, [{
    key: 'setLEDState',
    value: function setLEDState(DesiredLEDState) {
      var data = {
        DesiredLEDState: DesiredLEDState
      };

      return this._doAction('SetLEDState', data);
    }
  }, {
    key: 'getLEDState',
    value: function getLEDState() {
      var data = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

      return this._doAction('GetLEDState', data);
    }
  }, {
    key: 'addBondedZones',
    value: function addBondedZones() {}
  }, {
    key: 'removeBondedZones',
    value: function removeBondedZones() {}
  }, {
    key: 'createStereoPair',
    value: function createStereoPair() {}
  }, {
    key: 'separateStereoPair',
    value: function separateStereoPair() {}
  }, {
    key: 'setZoneAttributes',
    value: function setZoneAttributes() {}
  }, {
    key: 'getZoneAttributes',
    value: function getZoneAttributes() {}
  }, {
    key: 'getHouseholdID',
    value: function getHouseholdID() {}
  }, {
    key: 'getZoneInfo',
    value: function getZoneInfo() {}
  }, {
    key: 'setAutoplayLinkedZones',
    value: function setAutoplayLinkedZones() {}
  }, {
    key: 'getAutoplayLinkedZones',
    value: function getAutoplayLinkedZones() {}
  }, {
    key: 'setAutoplayRoomUUID',
    value: function setAutoplayRoomUUID() {}
  }, {
    key: 'getAutoplayRoomUUID',
    value: function getAutoplayRoomUUID() {}
  }, {
    key: 'setAutoplayVolume',
    value: function setAutoplayVolume() {}
  }, {
    key: 'getAutoplayVolume',
    value: function getAutoplayVolume() {}
  }, {
    key: 'importSetting',
    value: function importSetting() {}
  }, {
    key: 'setUseAutoplayVolume',
    value: function setUseAutoplayVolume() {}
  }, {
    key: 'getUseAutoplayVolume',
    value: function getUseAutoplayVolume() {}
  }, {
    key: 'addHTSatellite',
    value: function addHTSatellite() {}
  }, {
    key: 'removeHTSatellite',
    value: function removeHTSatellite() {}
  }]);

  return DeviceProperties;
})(_service2['default']);

exports['default'] = DeviceProperties;
module.exports = exports['default'];