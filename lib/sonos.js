module.exports = (function () {
  'use strict';

  var Device = require('./device');

  function Sonos() {
    // TODO: some form of network discovery
    this.devices = {
      '192.168.2.4': new Device('192.168.2.4')
    };
  }

  return Sonos;

}());
