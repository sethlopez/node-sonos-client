import Service from './service';

export default class AlarmClock extends Service {
  constructor(player) {
    super();

    this.player = player;
    this.endpoint = '/AlarmClock/Control';
    this.serviceType = 'urn:schemas-upnp-org:service:AlarmClock:1';
  }

  setFormat() {}

  getFormat() {
    return this._doAction('GetFormat');
  }

  setTimeZone() {}

  getTimeZone() {
    return this._doAction('GetTimeZone');
  }

  getTimeZoneAndRule() {
    return this._doAction('GetTimeZoneAndRule');
  }

  getTimeZoneRule() {
    return this._doAction('GetTimeZoneRule');
  }

  setTimeServer() {}

  getTimeServer() {
    return this._doAction('GetTimeServer');
  }

  setTimeNow() {}

  getHouseholdTimeAtStamp() {
    return this._doAction('GetHouseholdTimeAtStamp');
  }

  getTimeNow() {
    return this._doAction('GetTimeNow');
  }

  createAlarm() {}

  updateAlarm() {}

  destroyAlarm() {}

  listAlarms() {
    return this._doAction('ListAlarms');
  }

  setDailyIndexRefreshTime() {}

  getDailyIndexRefreshTime() {
    return this._doAction('GetDailyIndexRefreshTime');
  }
}
