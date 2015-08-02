import Service from './service';

export default class ConnectionManager extends Service {
  constructor(player) {
    super();

    this.player = player;
    this.endpoint = '/MediaServer/ConnectionManager/Control';
    this.serviceType = 'urn:schemas-upnp-org:service:ConnectionManager:1';
  }

  getProtocolInfo() {}

  getCurrentConnectionIDs() {}

  getCurrentConnectionInfo() {}
}
