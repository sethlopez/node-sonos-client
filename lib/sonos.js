'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _util = require('util');

var _util2 = _interopRequireDefault(_util);

var _events = require('events');

var _events2 = _interopRequireDefault(_events);

var _errors = require('./errors');

var _udp = require('./udp');

var _udp2 = _interopRequireDefault(_udp);

var _device = require('./device');

var _device2 = _interopRequireDefault(_device);

var _devices = {};

/**
 * Handles discovery of Sonos devices and acts as a directory for all of the
 * discovered devices.
 */

var Sonos = (function (_EventEmitter) {
  _inherits(Sonos, _EventEmitter);

  function Sonos() {
    _classCallCheck(this, Sonos);

    _get(Object.getPrototypeOf(Sonos.prototype), 'constructor', this).call(this);
  }

  /**
   * Gets things rolling by starting SSDP.
   */

  _createClass(Sonos, [{
    key: 'start',
    value: function start() {
      var udp = new _udp2['default']();

      udp.on('found', onSSDPSearchFound.bind(this));
      udp.start();

      this.emit('ready');
      _util2['default'].log('Sonos ready');
    }

    /**
     * Gets the device with the given IP address.
     *
     * @param    {String}  ip  The IP address for the device.
     *
     * @returns  {Object|Null}      The device with the given IP address.
     */
  }, {
    key: 'getDevice',
    value: function getDevice(ip) {
      return _devices[ip] || null;
    }

    /**
     * Gets all of the devices that have been discovered.
     *
     * @returns  {Object}  All of the discovered devices.
     */
  }, {
    key: 'getAllDevices',
    value: function getAllDevices() {
      return _devices;
    }

    /**
     * Removes the device with the given IP address.
     *
     * @param    {[type]}  ip  [description]
     *
     * @returns  {[type]}      [description]
     */
  }, {
    key: 'removeDevice',
    value: function removeDevice(ip) {
      delete _devices[ip];
    }

    /**
     * Adds the given device to the _devices object.
     *
     * @param  {Object}  device  The device to add.
     */
  }, {
    key: 'addDevice',
    value: function addDevice(device) {
      if (!this.getDevice(device.ip)) {
        _devices[device.ip] = device;
      }
    }
  }]);

  return Sonos;
})(_events2['default'])

/**
 * Handles creating initializing a new device when a Sonos device is found on
 * the network.
 *
 * @param    {Object}  deviceInfo  The IP address and device description URL of
 *                                 the device.
 */
;

exports['default'] = Sonos;
function onSSDPSearchFound(deviceInfo) {
  if (!this.getDevice(deviceInfo.ip)) {
    var device = new _device2['default'](deviceInfo);

    this.emit('udp/search/found', device);

    device.on('ready', onDeviceReady.bind(this, device));
    device.on('error', onDeviceError.bind(this));
  }
}

/**
 * Handles adding a new device once the device has been initialized.
 *
 * @param    {Object}  device  The device to add.
 */
function onDeviceReady(device) {
  this.emit('device/ready', device);
  this.addDevice(device);
}

/**
 * Handles any errors that occur with devices.
 *
 * @param    {Error}  error  The error thrown by the device.
 */
function onDeviceError(error) {
  _util2['default'].log(error);
}
module.exports = exports['default'];