import Service from './service';

export default class DeviceProperties extends Service {
  constructor(player) {
    super();

    this.player = player;
    this.endpoint = '/DeviceProperties/Control';
    this.serviceType = 'urn:schemas-upnp-org:service:DeviceProperties:1';
  }

  setLEDState(DesiredLEDState) {
    const data = {
      DesiredLEDState
    };

    return this._doAction('SetLEDState', data);
  }

  getLEDState(data = {}) {
    return this._doAction('GetLEDState', data);
  }

  addBondedZones() {}

  removeBondedZones() {}

  createStereoPair() {}

  separateStereoPair() {}

  setZoneAttributes() {}

  getZoneAttributes() {}

  getHouseholdID() {}

  getZoneInfo() {}

  setAutoplayLinkedZones() {}

  getAutoplayLinkedZones() {}

  setAutoplayRoomUUID() {}

  getAutoplayRoomUUID() {}

  setAutoplayVolume() {}

  getAutoplayVolume() {}

  importSetting() {}

  setUseAutoplayVolume() {}

  getUseAutoplayVolume() {}

  addHTSatellite() {}

  removeHTSatellite() {}
}
