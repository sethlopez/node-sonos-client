// only way to get these exports to work at the moment is to export the import
// as their name - not ideal
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _devicesMediaRenderer = require('./devices/media-renderer');

var _devicesMediaRenderer2 = _interopRequireDefault(_devicesMediaRenderer);

var _devicesMediaServer = require('./devices/media-server');

var _devicesMediaServer2 = _interopRequireDefault(_devicesMediaServer);

exports['default'] = {
  MediaRenderer: _devicesMediaRenderer2['default'],
  MediaServer: _devicesMediaServer2['default']
};
module.exports = exports['default'];