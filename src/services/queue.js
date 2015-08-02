import Service from './service';

export default class Queue extends Service {
  constructor(player) {
    super();

    this.player = player;
    this.endpoint = '/MediaRenderer/Queue/Control';
    this.serviceType = 'urn:schemas-sonos-com:service:Queue:1';
  }

  addURI() {}

  addMultipleURIs() {}

  attachQueue() {}

  backup() {}

  browse() {}

  createQueue() {}

  removeAllTracks() {}

  removeTrackRange() {}

  reorderTracks() {}

  replaceAllTracks() {}

  saveAsSonosPlaylist() {}
}
