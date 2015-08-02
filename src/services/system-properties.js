import Service from './service';

export default class SystemProperties extends Service {
  constructor(player) {
    super();

    this.player = player;
    this.endpoint = '/SystemProperties/Control';
    this.serviceType = 'urn:schemas-upnp-org:service:SystemProperties:1';
  }

  setString() {}

  setStringX() {}

  getString() {}

  getStringX() {}

  remove() {}

  removeX() {}

  getWebCode() {}

  provisionTrialAccount() {}

  provisionCredentialedTrialAccountX() {}

  migrateTrialAccountX() {}

  addAccountX() {}

  addAccountWithCredentialsX() {}

  addOAuthAccountX() {}

  removeAccount() {}

  editAccountPasswordX() {}

  setAccountNicknameX() {}

  refreshAccountCredentialsX() {}

  editAccountMd() {}

  doPostUpdateTasks() {}

  resetThirdPartyCredentials() {}

  enableRDM() {}

  getRDM() {}

  replaceAccountX() {}
}
