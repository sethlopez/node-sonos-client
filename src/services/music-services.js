import Service from './service';

export default class MusicServices extends Service {
  constructor(player) {
    super();

    this.player = player;
    this.endpoint = '/MusicServices/Control';
    this.serviceType = 'urn:schemas-upnp-org:service:MusicServices:1';
  }

  getSessionId(ServiceId, Username) {
    const data = {
      ServiceId,
      Username
    };

    return this._doAction('GetSessionId', data);
  }

  listAvailableServices() {
    return this._doAction('ListAvailableServices');
  }

  updateAvailableServices() {
    return this._doAction('UpdateAvailableServices');
  }
}
