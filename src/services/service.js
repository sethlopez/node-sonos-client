import upnp from '../upnp';

export default class Service {
  constructor() {}

  _doAction(action, data = {}) {
    return upnp.post(this.player.address, this.endpoint, this.serviceType, action, data);
  }
}
