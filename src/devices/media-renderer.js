import {AVTransport, ConnectionManager, GroupRenderingControl, Queue, RenderingControl} from '../services';

const avTransport = new AVTransport();
const connectionManager = new ConnectionManager();
const groupRenderingControl = new GroupRenderingControl();
const queue = new Queue();
const renderingControl = new RenderingControl();

export default class MediaRenderer {
  constructor() {}
}
