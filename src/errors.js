export default class CustomError extends Error {
  constructor(message) {
    super(message);
    
    this.message = message;
    Error.captureStackTrace(this, this.constructor);
  }

  get name() {
    return this.constructor.name;
  }
}

export class SonosError extends CustomError {
  constructor(message) {
    super(message);
  }
}

export class SSDPError extends CustomError {
  constructor(message) {
    super(message);
  }
}

export class UPnPError extends CustomError {
  constructor(message) {
    super(message);
  }
}

export class DeviceError extends CustomError {
  constructor(message) {
    super(message);
  }
}
