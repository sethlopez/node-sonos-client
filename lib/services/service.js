'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _upnp = require('../upnp');

var _upnp2 = _interopRequireDefault(_upnp);

var Service = (function () {
  function Service() {
    _classCallCheck(this, Service);
  }

  _createClass(Service, [{
    key: '_doAction',
    value: function _doAction(action) {
      var data = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

      return _upnp2['default'].post(this.player.address, this.endpoint, this.serviceType, action, data);
    }
  }]);

  return Service;
})();

exports['default'] = Service;
module.exports = exports['default'];