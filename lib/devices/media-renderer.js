'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _services = require('../services');

var MediaRenderer = function MediaRenderer(player) {
  _classCallCheck(this, MediaRenderer);

  this.player = player;
  this.avTransport = new _services.AVTransport(player);
  this.connectionManager = new _services.ConnectionManager(player);
  this.groupRenderingControl = new _services.GroupRenderingControl(player);
  this.queue = new _services.Queue(player);
  this.renderingControl = new _services.RenderingControl(player);
};

exports['default'] = MediaRenderer;
module.exports = exports['default'];