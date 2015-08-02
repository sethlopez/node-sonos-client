'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _service = require('./service');

var _service2 = _interopRequireDefault(_service);

var AlarmClock = (function (_Service) {
  _inherits(AlarmClock, _Service);

  function AlarmClock(player) {
    _classCallCheck(this, AlarmClock);

    _get(Object.getPrototypeOf(AlarmClock.prototype), 'constructor', this).call(this);

    this.player = player;
    this.endpoint = '/AlarmClock/Control';
    this.serviceType = 'urn:schemas-upnp-org:service:AlarmClock:1';
  }

  _createClass(AlarmClock, [{
    key: 'setFormat',
    value: function setFormat() {}
  }, {
    key: 'getFormat',
    value: function getFormat() {
      return this._doAction('GetFormat');
    }
  }, {
    key: 'setTimeZone',
    value: function setTimeZone() {}
  }, {
    key: 'getTimeZone',
    value: function getTimeZone() {
      return this._doAction('GetTimeZone');
    }
  }, {
    key: 'getTimeZoneAndRule',
    value: function getTimeZoneAndRule() {
      return this._doAction('GetTimeZoneAndRule');
    }
  }, {
    key: 'getTimeZoneRule',
    value: function getTimeZoneRule() {
      return this._doAction('GetTimeZoneRule');
    }
  }, {
    key: 'setTimeServer',
    value: function setTimeServer() {}
  }, {
    key: 'getTimeServer',
    value: function getTimeServer() {
      return this._doAction('GetTimeServer');
    }
  }, {
    key: 'setTimeNow',
    value: function setTimeNow() {}
  }, {
    key: 'getHouseholdTimeAtStamp',
    value: function getHouseholdTimeAtStamp() {
      return this._doAction('GetHouseholdTimeAtStamp');
    }
  }, {
    key: 'getTimeNow',
    value: function getTimeNow() {
      return this._doAction('GetTimeNow');
    }
  }, {
    key: 'createAlarm',
    value: function createAlarm() {}
  }, {
    key: 'updateAlarm',
    value: function updateAlarm() {}
  }, {
    key: 'destroyAlarm',
    value: function destroyAlarm() {}
  }, {
    key: 'listAlarms',
    value: function listAlarms() {
      return this._doAction('ListAlarms');
    }
  }, {
    key: 'setDailyIndexRefreshTime',
    value: function setDailyIndexRefreshTime() {}
  }, {
    key: 'getDailyIndexRefreshTime',
    value: function getDailyIndexRefreshTime() {
      return this._doAction('GetDailyIndexRefreshTime');
    }
  }]);

  return AlarmClock;
})(_service2['default']);

exports['default'] = AlarmClock;
module.exports = exports['default'];