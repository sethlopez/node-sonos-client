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

var RenderingControl = (function (_Service) {
  _inherits(RenderingControl, _Service);

  function RenderingControl(player) {
    _classCallCheck(this, RenderingControl);

    _get(Object.getPrototypeOf(RenderingControl.prototype), 'constructor', this).call(this);

    this.player = player;
    this.endpoint = '/MediaRenderer/RenderingControl/Control';
    this.serviceType = 'urn:schemas-upnp-org:service:RenderingControl:1';
  }

  _createClass(RenderingControl, [{
    key: 'getMute',
    value: function getMute() {}
  }, {
    key: 'setMute',
    value: function setMute() {}
  }, {
    key: 'resetBasicEQ',
    value: function resetBasicEQ() {}
  }, {
    key: 'resetExtEQ',
    value: function resetExtEQ() {}
  }, {
    key: 'getVolume',
    value: function getVolume() {}
  }, {
    key: 'setVolume',
    value: function setVolume() {}
  }, {
    key: 'setRelativeVolume',
    value: function setRelativeVolume() {}
  }, {
    key: 'getVolumeDB',
    value: function getVolumeDB() {}
  }, {
    key: 'setVolumeDB',
    value: function setVolumeDB() {}
  }, {
    key: 'getVolumeDBRange',
    value: function getVolumeDBRange() {}
  }, {
    key: 'getBass',
    value: function getBass() {}
  }, {
    key: 'setBass',
    value: function setBass() {}
  }, {
    key: 'getTreble',
    value: function getTreble() {}
  }, {
    key: 'setTreble',
    value: function setTreble() {}
  }, {
    key: 'getEQ',
    value: function getEQ() {}
  }, {
    key: 'setEQ',
    value: function setEQ() {}
  }, {
    key: 'getLoudness',
    value: function getLoudness() {}
  }, {
    key: 'setLoudness',
    value: function setLoudness() {}
  }, {
    key: 'getSupportsOutputFixed',
    value: function getSupportsOutputFixed() {}
  }, {
    key: 'getOutputFixed',
    value: function getOutputFixed() {}
  }, {
    key: 'setOutputFixed',
    value: function setOutputFixed() {}
  }, {
    key: 'getHeadphoneConnected',
    value: function getHeadphoneConnected() {}
  }, {
    key: 'rampToVolume',
    value: function rampToVolume() {}
  }, {
    key: 'restoreVolumePriorToRamp',
    value: function restoreVolumePriorToRamp() {}
  }, {
    key: 'setChannelMap',
    value: function setChannelMap() {}
  }]);

  return RenderingControl;
})(_service2['default']);

exports['default'] = RenderingControl;
module.exports = exports['default'];