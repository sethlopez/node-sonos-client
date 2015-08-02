import Service from './service';

export default class ZoneGroupTopology extends Service {
  constructor(player) {
    super();

    this.player = player;
    this.endpoint = '/ZoneGroupTopology/Control';
    this.serviceType = 'urn:schemas-upnp-org:service:ZoneGroupTopology:1';
  }

  checkForUpdate() {}

  beginSoftwareUpdate() {}

  reportUnresponsiveDevice() {}

  reportAlarmStartedRunning() {}

  submitDiagnostics() {}

  registerMobileDevice() {}

  getZoneGroupAttributes() {}

  getZoneGroupState() {}
}
