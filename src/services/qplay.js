import Service from './service';

export default class QPlay extends Service {
  constructor(player) {
    super();

    this.player = player;
    this.endpoint = '/QPlay/Control';
    this.serviceType = 'urn:schemas-tencent-com:service:QPlay:1';
  }

  qPlayAuth() {}
}
