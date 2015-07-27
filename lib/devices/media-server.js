'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _services = require('../services');

var connectionManager = new _services.ConnectionManager();
var contentDirectory = new _services.ContentDirectory();

var MediaServer = function MediaServer() {
  _classCallCheck(this, MediaServer);
};

exports['default'] = MediaServer;
module.exports = exports['default'];