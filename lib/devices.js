// only way to get these exports to work at the moment is to export the import
// as their name - not ideal
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _devicesMediaRenderer = require('./devices/media-renderer');

Object.defineProperty(exports, 'MediaRenderer', {
  enumerable: true,
  get: function get() {
    return _devicesMediaRenderer.MediaRenderer;
  }
});

var _devicesMediaServer = require('./devices/media-server');

Object.defineProperty(exports, 'MediaServer', {
  enumerable: true,
  get: function get() {
    return _devicesMediaServer.MediaServer;
  }
});