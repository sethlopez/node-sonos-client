'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _services = require('../services');

var avTransport = new _services.AVTransport();
var connectionManager = new _services.ConnectionManager();
var groupRenderingControl = new _services.GroupRenderingControl();
var queue = new _services.Queue();
var renderingControl = new _services.RenderingControl();

var MediaRenderer = function MediaRenderer() {
  _classCallCheck(this, MediaRenderer);
};

exports['default'] = MediaRenderer;
module.exports = exports['default'];