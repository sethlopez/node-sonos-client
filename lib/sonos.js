'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _util = require('util');

var _util2 = _interopRequireDefault(_util);

var _events = require('events');

var _events2 = _interopRequireDefault(_events);

var _errors = require('./errors');

var _udp = require('./udp');

var _udp2 = _interopRequireDefault(_udp);

var _player = require('./player');

var _player2 = _interopRequireDefault(_player);

var _players = {};
var _rooms = {};

/**
 * Handles discovery of Sonos devices and acts as a directory for all of the
 * discovered devices.
 */

var Sonos = (function (_EventEmitter) {
  _inherits(Sonos, _EventEmitter);

  function Sonos() {
    _classCallCheck(this, Sonos);

    _get(Object.getPrototypeOf(Sonos.prototype), 'constructor', this).call(this);
  }

  /**
   * Gets things rolling by starting SSDP.
   */

  _createClass(Sonos, [{
    key: 'start',
    value: function start() {
      var udp = new _udp2['default']();

      udp.on('found', onSSDPSearchFound.bind(this));
      udp.start();

      this.emit('ready');
      _util2['default'].log('Sonos ready');
    }

    /**
     * Gets the device with the given IP address.
     *
     * @param    {String}  ip  The IP address for the device.
     *
     * @returns  {Object|Null}      The device with the given IP address.
     */
  }, {
    key: 'getPlayer',
    value: function getPlayer(address) {
      return _players[address] || null;
    }

    /**
     * Gets all of the devices that have been discovered.
     *
     * @returns  {Object}  All of the discovered devices.
     */
  }, {
    key: 'getAllPlayers',
    value: function getAllPlayers() {
      return _players;
    }
  }, {
    key: 'getRoom',
    value: function getRoom(room) {
      return _rooms[room] || null;
    }
  }, {
    key: 'getRoomByPlayer',
    value: function getRoomByPlayer(address) {
      return _rooms[_players[address].roomName] || null;
    }
  }, {
    key: 'getAllRooms',
    value: function getAllRooms() {
      return _rooms;
    }

    /**
     * Removes the device with the given IP address.
     *
     * @param    {[type]}  ip  [description]
     *
     * @returns  {[type]}      [description]
     */
  }, {
    key: 'removePlayer',
    value: function removePlayer(address) {
      delete _players[address];
    }

    /**
     * Adds the given device to the _devices object.
     *
     * @param  {Object}  device  The device to add.
     */
  }, {
    key: 'addPlayer',
    value: function addPlayer(player) {
      if (!this.getPlayer(player.address)) {
        _players[player.address] = player;
      }
    }
  }]);

  return Sonos;
})(_events2['default'])

/**
 * Handles initializing a new player when it is found on the network.
 *
 * @param    {Object}  playerInfo  The IP address and description URL of the
 *                                 player.
 */
;

exports['default'] = Sonos;
function onSSDPSearchFound(playerInfo) {
  if (!this.getPlayer(playerInfo.address)) {
    var player = new _player2['default'](playerInfo);

    player.on('ready', onPlayerReady.bind(this, player));
    player.on('error', onPlayerError.bind(this));
    player.init();
  }
}

/**
 * Handles adding a new player once it has been initialized.
 *
 * @param    {Object}  player  The player to add.
 */
function onPlayerReady(player) {
  this.emit('player/ready', player);
  this.addPlayer(player);
}

/**
 * Handles any errors that occur with players.
 *
 * @param    {Error}  error  The error thrown by the player.
 */
function onPlayerError(error) {
  // util.log(error);
  console.log(error.stack);
}
module.exports = exports['default'];