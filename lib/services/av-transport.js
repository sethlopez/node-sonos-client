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

var AVTransport = (function (_Service) {
  _inherits(AVTransport, _Service);

  function AVTransport(player) {
    _classCallCheck(this, AVTransport);

    _get(Object.getPrototypeOf(AVTransport.prototype), 'constructor', this).call(this);

    this.player = player;
    this.endpoint = '/MediaRenderer/AVTransport/Control';
    this.serviceType = 'urn:schemas-upnp-org:service:AVTransport:1';
  }

  _createClass(AVTransport, [{
    key: 'setAVTransportURI',
    value: function setAVTransportURI() {}
  }, {
    key: 'setNextAVTransportURI',
    value: function setNextAVTransportURI() {}
  }, {
    key: 'addURIToQueue',
    value: function addURIToQueue() {}
  }, {
    key: 'addMultipleURIsToQueue',
    value: function addMultipleURIsToQueue() {}
  }, {
    key: 'reorderTracksInQueue',
    value: function reorderTracksInQueue() {}
  }, {
    key: 'removeTrackFromQueue',
    value: function removeTrackFromQueue() {}
  }, {
    key: 'removeTrackRangeFromQueue',
    value: function removeTrackRangeFromQueue() {}
  }, {
    key: 'removeAllTracksFromQueue',
    value: function removeAllTracksFromQueue() {}
  }, {
    key: 'saveQueue',
    value: function saveQueue() {}
  }, {
    key: 'backupQueue',
    value: function backupQueue() {}
  }, {
    key: 'createSavedQueue',
    value: function createSavedQueue() {}
  }, {
    key: 'addURIToSavedQueue',
    value: function addURIToSavedQueue() {}
  }, {
    key: 'reorderTracksInSavedQueue',
    value: function reorderTracksInSavedQueue() {}
  }, {
    key: 'getMediaInfo',
    value: function getMediaInfo() {}
  }, {
    key: 'getTransportInfo',
    value: function getTransportInfo() {}
  }, {
    key: 'getPositionInfo',
    value: function getPositionInfo() {}
  }, {
    key: 'getDeviceCapabilities',
    value: function getDeviceCapabilities() {}
  }, {
    key: 'getTransportSettings',
    value: function getTransportSettings() {}
  }, {
    key: 'getCrossfadeMode',
    value: function getCrossfadeMode() {}
  }, {
    key: 'stop',
    value: function stop() {}
  }, {
    key: 'play',
    value: function play() {}
  }, {
    key: 'pause',
    value: function pause() {}
  }, {
    key: 'seek',
    value: function seek() {}
  }, {
    key: 'next',
    value: function next() {}
  }, {
    key: 'nextProgrammedRadioTracks',
    value: function nextProgrammedRadioTracks() {}
  }, {
    key: 'previous',
    value: function previous() {}
  }, {
    key: 'nextSection',
    value: function nextSection() {}
  }, {
    key: 'previousSection',
    value: function previousSection() {}
  }, {
    key: 'setPlayMode',
    value: function setPlayMode() {}
  }, {
    key: 'setCrossfadeMode',
    value: function setCrossfadeMode() {}
  }, {
    key: 'notifyDeletedURI',
    value: function notifyDeletedURI() {}
  }, {
    key: 'getCurrentTransportActions',
    value: function getCurrentTransportActions() {}
  }, {
    key: 'becomeCoordinatorOfStandaloneGroup',
    value: function becomeCoordinatorOfStandaloneGroup() {}
  }, {
    key: 'delegateGroupCoordinationTo',
    value: function delegateGroupCoordinationTo() {}
  }, {
    key: 'becomeGroupCoordinator',
    value: function becomeGroupCoordinator() {}
  }, {
    key: 'becomeGroupCoordinatorAndSource',
    value: function becomeGroupCoordinatorAndSource() {}
  }, {
    key: 'changeCoordinator',
    value: function changeCoordinator() {}
  }, {
    key: 'changeTransportSettings',
    value: function changeTransportSettings() {}
  }, {
    key: 'configureSleepTimer',
    value: function configureSleepTimer() {}
  }, {
    key: 'getRemainingSleepTimerDuration',
    value: function getRemainingSleepTimerDuration() {}
  }, {
    key: 'runAlarm',
    value: function runAlarm() {}
  }, {
    key: 'startAutoplay',
    value: function startAutoplay() {}
  }, {
    key: 'getRunningAlarmProperties',
    value: function getRunningAlarmProperties() {}
  }, {
    key: 'snoozeAlarm',
    value: function snoozeAlarm() {}
  }]);

  return AVTransport;
})(_service2['default']);

exports['default'] = AVTransport;
module.exports = exports['default'];