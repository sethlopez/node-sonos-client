"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var CustomError = (function (_Error) {
  _inherits(CustomError, _Error);

  function CustomError(message) {
    _classCallCheck(this, CustomError);

    _get(Object.getPrototypeOf(CustomError.prototype), "constructor", this).call(this, message);

    this.message = message;
    Error.captureStackTrace(this, this.constructor);
  }

  _createClass(CustomError, [{
    key: "name",
    get: function get() {
      return this.constructor.name;
    }
  }]);

  return CustomError;
})(Error);

exports["default"] = CustomError;

var UDPError = (function (_CustomError) {
  _inherits(UDPError, _CustomError);

  function UDPError(message) {
    _classCallCheck(this, UDPError);

    _get(Object.getPrototypeOf(UDPError.prototype), "constructor", this).call(this, message);
  }

  return UDPError;
})(CustomError);

exports.UDPError = UDPError;

var UPnPError = (function (_CustomError2) {
  _inherits(UPnPError, _CustomError2);

  function UPnPError(message) {
    _classCallCheck(this, UPnPError);

    _get(Object.getPrototypeOf(UPnPError.prototype), "constructor", this).call(this, message);
  }

  return UPnPError;
})(CustomError);

exports.UPnPError = UPnPError;

var ServiceError = (function (_CustomError3) {
  _inherits(ServiceError, _CustomError3);

  function ServiceError(message) {
    _classCallCheck(this, ServiceError);

    _get(Object.getPrototypeOf(ServiceError.prototype), "constructor", this).call(this, message);
  }

  return ServiceError;
})(CustomError);

exports.ServiceError = ServiceError;

var PlayerError = (function (_CustomError4) {
  _inherits(PlayerError, _CustomError4);

  function PlayerError(message) {
    _classCallCheck(this, PlayerError);

    _get(Object.getPrototypeOf(PlayerError.prototype), "constructor", this).call(this, message);
  }

  return PlayerError;
})(CustomError);

exports.PlayerError = PlayerError;

var SonosError = (function (_CustomError5) {
  _inherits(SonosError, _CustomError5);

  function SonosError(message) {
    _classCallCheck(this, SonosError);

    _get(Object.getPrototypeOf(SonosError.prototype), "constructor", this).call(this, message);
  }

  return SonosError;
})(CustomError);

exports.SonosError = SonosError;