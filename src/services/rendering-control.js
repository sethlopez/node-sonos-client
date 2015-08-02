import Service from './service';

export default class RenderingControl extends Service {
  constructor(player) {
    super();

    this.player = player;
    this.endpoint = '/MediaRenderer/RenderingControl/Control';
    this.serviceType = 'urn:schemas-upnp-org:service:RenderingControl:1';
  }

  getMute() {}

  setMute() {}

  resetBasicEQ() {}

  resetExtEQ() {}

  getVolume() {}

  setVolume() {}

  setRelativeVolume() {}

  getVolumeDB() {}

  setVolumeDB() {}

  getVolumeDBRange() {}

  getBass() {}

  setBass() {}

  getTreble() {}

  setTreble() {}

  getEQ() {}

  setEQ() {}

  getLoudness() {}

  setLoudness() {}

  getSupportsOutputFixed() {}

  getOutputFixed() {}

  setOutputFixed() {}

  getHeadphoneConnected() {}

  rampToVolume() {}

  restoreVolumePriorToRamp() {}

  setChannelMap() {}
}
