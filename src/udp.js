import EventEmitter from 'events';
import util from 'util';
import dgram from 'dgram';
import {UDPError} from './errors';

const MULTICAST_IP = '239.255.255.250';
const MULTICAST_PORT = 1900;
const SEARCH_MX = 3;

/**
 * TODO: Implement logic to listen for NOTIFY messages instead of running an
 *       M-Search on an interval.
 */

export default class UDP extends EventEmitter {
  constructor() {
    super();
  }

  start() {
    this.socket = dgram.createSocket('udp4');

    this.socket.on('listening', onListening.bind(this));
    this.socket.on('message', onMessage.bind(this));
    this.socket.on('close', onClose.bind(this));
    this.socket.on('error', onError.bind(this));

    this.socket.bind(MULTICAST_PORT);
  }

  stop() {
    this.socket.close();
    this.socket = null;
  }

  search(searchTarget = 'upnp:rootdevice') {
    const headers = new Buffer([
      'M-SEARCH * HTTP/1.1',
      `HOST: ${MULTICAST_IP}:${MULTICAST_PORT}`,
      'MAN: "ssdp:discover"',
      `MX: ${SEARCH_MX}`, // seconds to delay
      `ST: ${searchTarget}` // search target
    ].join('\r\n'));

    this.socket.send(headers, 0, headers.length, MULTICAST_PORT, MULTICAST_IP);

    this.emit('search/start');

    setTimeout(() => {
      this.emit('search/complete')
    }, 3000);
  }
}

function parseMessage(message) {
  const parsed = {};

  message.toString()
    .split('\r\n')
    .filter(Boolean)
    .forEach((line, i) => {
      if (i) {
        let [, key, value] = line.match(/^([\w-]+):\s*(.*)$/i);

        parsed[key.toLowerCase()] = value;
      } else {
        switch (line.split(' ')[0]) {
          case 'M-SEARCH':
            parsed.type = 'search';
            break;
          case 'NOTIFY':
            parsed.type = 'notify';
            break;
          default:
            parsed.type = 'found';
            break
        }
      }
    });

  return parsed;
}

function onListening() {
  this.socket.addMembership(MULTICAST_IP);
  this.search();
  this.emit('listening');
}

function onMessage(message, rinfo) {
  const parsed = parseMessage(message);

  if (/sonos/i.test(parsed.server)) {
    switch (parsed.type) {
      case 'found':
        this.emit('found', {
          address: rinfo.address,
          location: parsed.location
        });
        break;
      case 'notify':
        this.emit('notify', parsed);
        break;
      default:
        break;
    }
  }
}

function onClose() {
  this.emit('close');
}

function onError(error) {
  this.emit('error', new SSDPError(error.message));
}
