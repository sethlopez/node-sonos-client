import Service from './service';

export default class AVTransport extends Service {
  constructor(player) {
    super();

    this.player = player
    this.endpoint = '/MediaRenderer/AVTransport/Control';
    this.serviceType = 'urn:schemas-upnp-org:service:AVTransport:1';
  }

  setAVTransportURI() {}

  setNextAVTransportURI() {}

  addURIToQueue() {}

  addMultipleURIsToQueue() {}

  reorderTracksInQueue() {}

  removeTrackFromQueue() {}

  removeTrackRangeFromQueue() {}

  removeAllTracksFromQueue() {}

  saveQueue() {}

  backupQueue() {}

  createSavedQueue() {}

  addURIToSavedQueue() {}

  reorderTracksInSavedQueue() {}

  getMediaInfo() {}

  getTransportInfo() {}

  getPositionInfo() {}

  getDeviceCapabilities() {}

  getTransportSettings() {}

  getCrossfadeMode() {}

  stop() {}

  play() {}

  pause() {}

  seek() {}

  next() {}

  nextProgrammedRadioTracks() {}

  previous() {}

  nextSection() {}

  previousSection() {}

  setPlayMode() {}

  setCrossfadeMode() {}

  notifyDeletedURI() {}

  getCurrentTransportActions() {}

  becomeCoordinatorOfStandaloneGroup() {}

  delegateGroupCoordinationTo() {}

  becomeGroupCoordinator() {}

  becomeGroupCoordinatorAndSource() {}

  changeCoordinator() {}

  changeTransportSettings() {}

  configureSleepTimer() {}

  getRemainingSleepTimerDuration() {}

  runAlarm() {}

  startAutoplay() {}

  getRunningAlarmProperties() {}

  snoozeAlarm() {}
}
