import {ConnectionManager, ContentDirectory} from '../services';

export default class MediaServer {
  constructor(player) {
    this.player = player;
    this.connectionManager = new ConnectionManager(player);
    this.contentDirectory = new ContentDirectory(player);
  }
}
