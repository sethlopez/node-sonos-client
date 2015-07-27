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

export class UDPError extends CustomError {
  constructor(message) {
    super(message);
  }
}

export class UPnPError extends CustomError {
  constructor(message) {
    super(message);
  }
}

export class ServiceError extends CustomError {
  constructor(message) {
    super(message);
  }
}

export class PlayerError extends CustomError {
  constructor(message) {
    super(message);
  }
}

export class SonosError extends CustomError {
  constructor(message) {
    super(message);
  }
}
