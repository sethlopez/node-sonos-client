import Service from './service';

export default class GroupRenderingControl extends Service {
  constructor(player) {
    super();

    this.player = player;
    this.endpoint = '/MediaRenderer/GroupRenderingControl/Control';
    this.serviceType = 'urn:schemas-upnp-org:service:GroupRenderingControl:1';
  }

  getGroupMute() {}

  setGroupMute() {}

  getGroupVolume() {}

  setGroupVolume() {}

  setRelativeGroupVolume() {}

  snapshotGroupVolume() {}
}
