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

var SonosError = (function (_CustomError) {
  _inherits(SonosError, _CustomError);

  function SonosError(message) {
    _classCallCheck(this, SonosError);

    _get(Object.getPrototypeOf(SonosError.prototype), "constructor", this).call(this, message);
  }

  return SonosError;
})(CustomError);

exports.SonosError = SonosError;

var SSDPError = (function (_CustomError2) {
  _inherits(SSDPError, _CustomError2);

  function SSDPError(message) {
    _classCallCheck(this, SSDPError);

    _get(Object.getPrototypeOf(SSDPError.prototype), "constructor", this).call(this, message);
  }

  return SSDPError;
})(CustomError);

exports.SSDPError = SSDPError;

var UPnPError = (function (_CustomError3) {
  _inherits(UPnPError, _CustomError3);

  function UPnPError(message) {
    _classCallCheck(this, UPnPError);

    _get(Object.getPrototypeOf(UPnPError.prototype), "constructor", this).call(this, message);
  }

  return UPnPError;
})(CustomError);

exports.UPnPError = UPnPError;

var DeviceError = (function (_CustomError4) {
  _inherits(DeviceError, _CustomError4);

  function DeviceError(message) {
    _classCallCheck(this, DeviceError);

    _get(Object.getPrototypeOf(DeviceError.prototype), "constructor", this).call(this, message);
  }

  return DeviceError;
})(CustomError);

exports.DeviceError = DeviceError;