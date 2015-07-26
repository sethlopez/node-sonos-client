import util from 'util';
import EventEmitter from 'events';
import {SonosError} from './errors';
import UDP from './udp';
import Device from './device';

const _devices = {};

/**
 * Handles discovery of Sonos devices and acts as a directory for all of the
 * discovered devices.
 */
export default class Sonos extends EventEmitter {
  constructor() {
    super();
  }

  /**
   * Gets things rolling by starting SSDP.
   */
  start() {
    const udp = new UDP();

    udp.on('found', onSSDPSearchFound.bind(this));
    udp.start();

    this.emit('ready');
    util.log('Sonos ready');
  }

  /**
   * Gets the device with the given IP address.
   *
   * @param    {String}  ip  The IP address for the device.
   *
   * @returns  {Object|Null}      The device with the given IP address.
   */
  getDevice(ip) {
    return _devices[ip] || null;
  }

  /**
   * Gets all of the devices that have been discovered.
   *
   * @returns  {Object}  All of the discovered devices.
   */
  getAllDevices() {
    return _devices;
  }

  /**
   * Removes the device with the given IP address.
   *
   * @param    {[type]}  ip  [description]
   *
   * @returns  {[type]}      [description]
   */
  removeDevice(ip) {
    delete _devices[ip];
  }

  /**
   * Adds the given device to the _devices object.
   *
   * @param  {Object}  device  The device to add.
   */
  addDevice(device) {
    if (!this.getDevice(device.ip)) {
      _devices[device.ip] = device;
    }
  }
}

/**
 * Handles creating initializing a new device when a Sonos device is found on
 * the network.
 *
 * @param    {Object}  deviceInfo  The IP address and device description URL of
 *                                 the device.
 */
function onSSDPSearchFound(deviceInfo) {
  if (!this.getDevice(deviceInfo.ip)) {
    const device = new Device(deviceInfo);

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
  util.log(error);
}
