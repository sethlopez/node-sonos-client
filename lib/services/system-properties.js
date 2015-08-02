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

var SystemProperties = (function (_Service) {
  _inherits(SystemProperties, _Service);

  function SystemProperties(player) {
    _classCallCheck(this, SystemProperties);

    _get(Object.getPrototypeOf(SystemProperties.prototype), 'constructor', this).call(this);

    this.player = player;
    this.endpoint = '/SystemProperties/Control';
    this.serviceType = 'urn:schemas-upnp-org:service:SystemProperties:1';
  }

  _createClass(SystemProperties, [{
    key: 'setString',
    value: function setString() {}
  }, {
    key: 'setStringX',
    value: function setStringX() {}
  }, {
    key: 'getString',
    value: function getString() {}
  }, {
    key: 'getStringX',
    value: function getStringX() {}
  }, {
    key: 'remove',
    value: function remove() {}
  }, {
    key: 'removeX',
    value: function removeX() {}
  }, {
    key: 'getWebCode',
    value: function getWebCode() {}
  }, {
    key: 'provisionTrialAccount',
    value: function provisionTrialAccount() {}
  }, {
    key: 'provisionCredentialedTrialAccountX',
    value: function provisionCredentialedTrialAccountX() {}
  }, {
    key: 'migrateTrialAccountX',
    value: function migrateTrialAccountX() {}
  }, {
    key: 'addAccountX',
    value: function addAccountX() {}
  }, {
    key: 'addAccountWithCredentialsX',
    value: function addAccountWithCredentialsX() {}
  }, {
    key: 'addOAuthAccountX',
    value: function addOAuthAccountX() {}
  }, {
    key: 'removeAccount',
    value: function removeAccount() {}
  }, {
    key: 'editAccountPasswordX',
    value: function editAccountPasswordX() {}
  }, {
    key: 'setAccountNicknameX',
    value: function setAccountNicknameX() {}
  }, {
    key: 'refreshAccountCredentialsX',
    value: function refreshAccountCredentialsX() {}
  }, {
    key: 'editAccountMd',
    value: function editAccountMd() {}
  }, {
    key: 'doPostUpdateTasks',
    value: function doPostUpdateTasks() {}
  }, {
    key: 'resetThirdPartyCredentials',
    value: function resetThirdPartyCredentials() {}
  }, {
    key: 'enableRDM',
    value: function enableRDM() {}
  }, {
    key: 'getRDM',
    value: function getRDM() {}
  }, {
    key: 'replaceAccountX',
    value: function replaceAccountX() {}
  }]);

  return SystemProperties;
})(_service2['default']);

exports['default'] = SystemProperties;
module.exports = exports['default'];