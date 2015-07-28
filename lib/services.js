'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _servicesAlarmClock = require('./services/alarm-clock');

var _servicesAlarmClock2 = _interopRequireDefault(_servicesAlarmClock);

var _servicesAvTransport = require('./services/av-transport');

var _servicesAvTransport2 = _interopRequireDefault(_servicesAvTransport);

var _servicesConnectionManager = require('./services/connection-manager');

var _servicesConnectionManager2 = _interopRequireDefault(_servicesConnectionManager);

var _servicesContentDirectory = require('./services/content-directory');

var _servicesContentDirectory2 = _interopRequireDefault(_servicesContentDirectory);

var _servicesDeviceProperties = require('./services/device-properties');

var _servicesDeviceProperties2 = _interopRequireDefault(_servicesDeviceProperties);

var _servicesGroupManagement = require('./services/group-management');

var _servicesGroupManagement2 = _interopRequireDefault(_servicesGroupManagement);

var _servicesGroupRenderingControl = require('./services/group-rendering-control');

var _servicesGroupRenderingControl2 = _interopRequireDefault(_servicesGroupRenderingControl);

var _servicesMusicServices = require('./services/music-services');

var _servicesMusicServices2 = _interopRequireDefault(_servicesMusicServices);

var _servicesQplay = require('./services/qplay');

var _servicesQplay2 = _interopRequireDefault(_servicesQplay);

var _servicesQueue = require('./services/queue');

var _servicesQueue2 = _interopRequireDefault(_servicesQueue);

var _servicesRenderingControl = require('./services/rendering-control');

var _servicesRenderingControl2 = _interopRequireDefault(_servicesRenderingControl);

var _servicesSystemProperties = require('./services/system-properties');

var _servicesSystemProperties2 = _interopRequireDefault(_servicesSystemProperties);

var _servicesZoneGroupTopology = require('./services/zone-group-topology');

var _servicesZoneGroupTopology2 = _interopRequireDefault(_servicesZoneGroupTopology);

exports['default'] = {
  AlarmClock: _servicesAlarmClock2['default'],
  AVTransport: _servicesAvTransport2['default'],
  ConnectionManager: _servicesConnectionManager2['default'],
  ContentDirectory: _servicesContentDirectory2['default'],
  DeviceProperties: _servicesDeviceProperties2['default'],
  GroupManagement: _servicesGroupManagement2['default'],
  GroupRenderingControl: _servicesGroupRenderingControl2['default'],
  MusicServices: _servicesMusicServices2['default'],
  QPlay: _servicesQplay2['default'],
  Queue: _servicesQueue2['default'],
  RenderingControl: _servicesRenderingControl2['default'],
  SystemProperties: _servicesSystemProperties2['default'],
  ZoneGroupTopology: _servicesZoneGroupTopology2['default']
};
module.exports = exports['default'];