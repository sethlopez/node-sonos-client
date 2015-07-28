'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _services = require('../services');

var MediaServer = function MediaServer(player) {
  _classCallCheck(this, MediaServer);

  this.player = player;
  this.connectionManager = new _services.ConnectionManager(player);
  this.contentDirectory = new _services.ContentDirectory(player);
};

exports['default'] = MediaServer;
module.exports = exports['default'];