'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _service = require('./service');

var _service2 = _interopRequireDefault(_service);

var ContentDirectory = (function (_Service) {
  _inherits(ContentDirectory, _Service);

  function ContentDirectory(player) {
    _classCallCheck(this, ContentDirectory);

    _get(Object.getPrototypeOf(ContentDirectory.prototype), 'constructor', this).call(this);

    this.player = player;
    this.endpoint = '/MediaServer/ContentDirectory/Control';
    this.serviceType = 'urn:schemas-upnp-org:service:ContentDirectory:1';
  }

  _createClass(ContentDirectory, [{
    key: 'getSearchCapabilities',
    value: function getSearchCapabilities() {}
  }, {
    key: 'getSortCapabilities',
    value: function getSortCapabilities() {}
  }, {
    key: 'getSystemUpdateID',
    value: function getSystemUpdateID() {}
  }, {
    key: 'getAlbumArtistDisplayOption',
    value: function getAlbumArtistDisplayOption() {}
  }, {
    key: 'getLastIndexChange',
    value: function getLastIndexChange() {}
  }, {
    key: 'browse',
    value: function browse() {}
  }, {
    key: 'findPrefix',
    value: function findPrefix() {}
  }, {
    key: 'getAllPrefixLocations',
    value: function getAllPrefixLocations() {}
  }, {
    key: 'createObject',
    value: function createObject() {}
  }, {
    key: 'updateObject',
    value: function updateObject() {}
  }, {
    key: 'destroyObject',
    value: function destroyObject() {}
  }, {
    key: 'refreshShareList',
    value: function refreshShareList() {}
  }, {
    key: 'requestResort',
    value: function requestResort() {}
  }, {
    key: 'getShareIndexInProgress',
    value: function getShareIndexInProgress() {}
  }, {
    key: 'getBrowseable',
    value: function getBrowseable() {}
  }, {
    key: 'setBrowseable',
    value: function setBrowseable() {}
  }]);

  return ContentDirectory;
})(_service2['default']);

exports['default'] = ContentDirectory;
module.exports = exports['default'];