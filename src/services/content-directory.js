import Service from './service';

export default class ContentDirectory extends Service {
  constructor(player) {
    super();

    this.player = player;
    this.endpoint = '/MediaServer/ContentDirectory/Control';
    this.serviceType = 'urn:schemas-upnp-org:service:ContentDirectory:1';
  }

  getSearchCapabilities() {}

  getSortCapabilities() {}

  getSystemUpdateID() {}

  getAlbumArtistDisplayOption() {}

  getLastIndexChange() {}

  browse() {}

  findPrefix() {}

  getAllPrefixLocations() {}

  createObject() {}

  updateObject() {}

  destroyObject() {}

  refreshShareList() {}

  requestResort() {}

  getShareIndexInProgress() {}

  getBrowseable() {}

  setBrowseable() {}
}
