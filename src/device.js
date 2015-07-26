import EventEmitter from 'events';
import http from 'http';
import util from 'util';
import {DeviceError} from './errors';
import upnp from './upnp';

/**
 * Represents a Sonos device and allows us to call actions for that device.
 */
export default class Device extends EventEmitter {
  constructor(deviceInfo) {
    super();

    // seed the device object with the known ip and device description url
    Object.assign(this, deviceInfo);

    // query the device for its description
    upnp.get(this.location)
      .then((response) => {
        Object.assign(this, response.device);

        this.refresh();
        this.emit('ready');
      })
      .catch((error) => { this.emit('error', new DeviceError(error.message)); });
  }

  /**
   * Refreshes the device
   *
   * @returns  {[type]}  [description]
   */
  refresh(seconds = 1800) {
    if (this.expireTimeout) {
      clearTimeout(this.expireTimeout);
    }

    // set the device to expire in 30 minutes and let subsequent ssdp:alive
    // messages refresh the device
    this.expireTimeout = setTimeout(this.expire.bind(this), 1000 * seconds);
    this.emit('refreshed');
  }

  expire() {
    this.expireTimeout = null;
    this.emit('expired');
  }

  getVolume(InstanceID = 0, Channel = 'Master') {
    const data = {
      InstanceID,
      Channel
    };

    return this._doAction('GetVolume', data);
  }

  setVolume(DesiredVolume = 30, InstanceID = 0, Channel = 'Master') {
    const data = {
      InstanceID,
      Channel,
      DesiredVolume
    };

    return this._doAction('SetVolume', data);
  }

  getMute(InstanceID = 0, Channel = 'Master') {
    const data = {
      InstanceID,
      Channel
    };

    return this._doAction('GetMute', data);
  }

  setMute(DesiredMute = true, InstanceID = 0, Channel = 'Master') {
    const data = {
      InstanceID,
      Channel,
      DesiredMute
    };

    return this._doAction('SetMute', data);
  }

  getMediaInfo(InstanceID = 0) {
    return this._doAction('GetMediaInfo', { InstanceID });
  }

  getTransportInfo(InstanceID = 0) {
    return this._doAction('GetTransportInfo', { InstanceID });
  }

  getPositionInfo(InstanceID = 0) {
    return this._doAction('GetPositionInfo', { InstanceID });
  }

  getDeviceCapabilities(InstanceID = 0) {
    return this._doAction('GetDeviceCapabilities', { InstanceID });
  }

  getTransportSettings(InstanceID = 0) {
    return this._doAction('GetTransportSettings', { InstanceID });
  }

  getCrossfadeMode(InstanceID = 0) {
    return this._doAction('GetCrossfadeMode', { InstanceID });
  }

  setCrossfadeMode(CrossfadeMode = false) {
    const data = {
      InstanceID,
      CrossfadeMode
    };

    return this._doAction('SetPlayMode', data);
  }

  setPlayMode(NewPlayMode = 'NORMAL', InstanceID = 0) {
    const data = {
      InstanceID,
      NewPlayMode
    };

    return this._doAction('SetPlayMode', data);
  }

  stop(InstanceID = 0) {
    return this._doAction('Stop', { InstanceID });
  }

  play(Speed = 1, InstanceID = 0) {
    const data = {
      InstanceID,
      Speed
    };

    return this._doAction('Play', data);
  }

  pause(InstanceID = 0) {
    return this._doAction('Pause', { InstanceID });
  }

  seek() {}

  next(InstanceID = 0) {
    return this._doAction('Next', { InstanceID });
  }

  previous(InstanceID = 0) {
    return this._doAction('Previous', { InstanceID });
  }

  getCurrentTransportActions(InstanceID = 0) {
    return this._doAction('GetCurrentTransportActions', { InstanceID });
  }

  _doAction(action, data) {
    return upnp.post(this.address, action, data)
      .then(response => response)
      .catch((error) => {
        this.emit('error', new DeviceError(`${action}: ${error.message}`));
      });
  }
}
