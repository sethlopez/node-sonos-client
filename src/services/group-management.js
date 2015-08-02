import Service from './service';

export default class GroupManagement extends Service {
  constructor(player) {
    super();

    this.player = player;
    this.endpoint = '/GroupManagement/Control';
    this.serviceType = 'urn:schemas-upnp-org:service:GroupManagement:1';
  }

  addMember() {}

  removeMember() {}

  reportTrackBufferingResult() {}
}
