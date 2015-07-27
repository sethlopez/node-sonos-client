import util from 'util';
import EventEmitter from 'events';
import {SonosError} from './errors';
import UDP from './udp';
import Player from './player';

const _players = {};
const _rooms = {};

/**
 * Handles discovery of Sonos devices and acts as a directory for all of the
 * discovered devices.
 */
export default class Sonos extends EventEmitter {
  constructor() {
    super();
  }

  /**
   * Gets things rolling by starting SSDP.
   */
  start() {
    const udp = new UDP();

    udp.on('found', onSSDPSearchFound.bind(this));
    udp.start();

    this.emit('ready');
    util.log('Sonos ready');
  }

  /**
   * Gets the device with the given IP address.
   *
   * @param    {String}  ip  The IP address for the device.
   *
   * @returns  {Object|Null}      The device with the given IP address.
   */
  getPlayer(address) {
    return _players[address] || null;
  }

  /**
   * Gets all of the devices that have been discovered.
   *
   * @returns  {Object}  All of the discovered devices.
   */
  getAllPlayers() {
    return _players;
  }

  getRoom(room) {
    return _rooms[room] || null;
  }

  getRoomByPlayer(address) {
    return _rooms[_players[address].roomName] || null;
  }

  getAllRooms() {
    return _rooms;
  }

  /**
   * Removes the device with the given IP address.
   *
   * @param    {[type]}  ip  [description]
   *
   * @returns  {[type]}      [description]
   */
  removePlayer(address) {
    delete _players[address];
  }

  /**
   * Adds the given device to the _devices object.
   *
   * @param  {Object}  device  The device to add.
   */
  addPlayer(player) {
    if (!this.getPlayer(player.address)) {
      _players[player.address] = player;
    }
  }
}

/**
 * Handles initializing a new player when it is found on the network.
 *
 * @param    {Object}  playerInfo  The IP address and description URL of the
 *                                 player.
 */
function onSSDPSearchFound(playerInfo) {
  if (!this.getPlayer(playerInfo.address)) {
    const player = new Player(playerInfo);

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
