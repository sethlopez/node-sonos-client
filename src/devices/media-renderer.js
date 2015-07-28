import {AVTransport, ConnectionManager, GroupRenderingControl, Queue, RenderingControl} from '../services';

export default class MediaRenderer {
  constructor(player) {
    this.player = player;
    this.avTransport = new AVTransport(player);
    this.connectionManager = new ConnectionManager(player);
    this.groupRenderingControl = new GroupRenderingControl(player);
    this.queue = new Queue(player);
    this.renderingControl = new RenderingControl(player);
  }
}
