import http from 'http';
import {UPnPError} from './errors';
import * as xml2js from 'xml2js';

let xmlParser = new xml2js.Parser({
  trim: true,           // trim the whitespace from values
  explicitRoot: false,  // no root node
  explicitArray: false, // use arrays only when necessary
  ignoreAttrs: true,    // no attributes
  async: true           // don't block
});
let xmlBuilder = new xml2js.Builder({
  rootName: 's:Envelope',
  xmldec: {
    'version': '1.0',
    'encoding': 'UTF-8'
  }
});

/**
 * Acts as the communication layer between our code and the Sonos devices.
 */
export default class UPnP {
  /**
   * Gets the device description XML from the given URL and return a parsed
   * XML description.
   *
   * @param    {String}  url  The URL for the device description.
   *
   * @returns  {Object}       The parsed XML device description.
   */
  static get(url) {
    return new Promise((resolve, reject) => {
      http.get(url, (response) => {
        response.body = '';
        response.on('data', (chunk) => { response.body += chunk; });
        response.on('end', () => {
          xmlParser.parseString(response.body, (error, result) => {
            if (error) {
              reject(new UPnPError(error));
            } else {
              resolve(result);
            }
          });
        });
      }).on('error', (error) => {
        console.log('http.get error');
        reject(new UPnPError(error.message));
      });
    });
  }

  static post(address, action, data) {
    const {endpoint, service} = soapLookup(action);
    const payload = envelop(data, action, service);
    const options = {
      host: address,
      port: 1400,
      method: 'POST',
      path: endpoint,
      headers: {
        'SOAPAction': `${service}#${action}`,
        'Content-Type': 'text/xml; charset=utf8',
        'Content-Length': payload.length
      }
    };

    return new Promise((resolve, reject) => {
      const request = http.request(options, (response) => {
        response.body = '';
        response.on('data', (chunk) => { response.body += chunk; });
        response.on('end', () => {
          xmlParser.parseString(response.body, (error, result) => {
            if (error) {
              reject(new UPnPError(error));
            } else {
              if (result.hasOwnProperty('s:Body') && !result['s:Body'].hasOwnProperty('s:Fault') && result['s:Body'].hasOwnProperty(`u:${action}Response`)) {
                resolve(result['s:Body'][`u:${action}Response`] || null);
              } else {
                reject(new UPnPError(`An error occurred while performing ${action}. ${error}`));
              }
            }
          });
        });
      }).on('error', (error) => {
        reject(new UPnP(error));
      });

      request.write(payload);
      request.end();
    });
  }
}

function soapLookup(action) {
  const soap = {};

  switch (action) {
    // DeviceProperties
    case 'GetLEDState':
    case 'SetLEDState':
      soap.endpoint = '/DeviceProperties/Control';
      soap.service = 'urn:schemas-upnp-org:service:DeviceProperties:1';
      break;
    // SystemProperties
    case 'SetString':
      break;
    // RederingControl
    case 'GetVolume':
    case 'SetVolume':
    case 'GetMute':
    case 'SetMute':
      soap.endpoint = '/MediaRenderer/RenderingControl/Control';
      soap.service = 'urn:schemas-upnp-org:service:RenderingControl:1';
      break;
    // AVTransport
    case 'GetMediaInfo':
    case 'GetTransportInfo':
    case 'GetPositionInfo':
    case 'GetDeviceCapabilities':
    case 'GetTransportSettings':
    case 'GetCrossfadeMode':
    case 'SetPlayMode':
    case 'SetCrossfadeMode':
    case 'Play':
    case 'Pause':
    case 'Stop':
    case 'Seek':
    case 'Next':
    case 'Previous':
    case 'GetCurrentTransportActions':
    case 'ChangeTransportSettings':
      soap.endpoint = '/MediaRenderer/AVTransport/Control';
      soap.service = 'urn:schemas-upnp-org:service:AVTransport:1';
      break;
    default:
      throw new Error(`${action} is not a valid SOAP action.`);
      break;
  }

  return soap;
}

function envelop(data, action, service) {
  const actionKey = `u:${action}`;
  const actionObject = {
    // these attributes will go on the root node
    '$': {
      'xmlns:s': 'http://schemas.xmlsoap.org/soap/envelope/',
      's:encodingStyle': 'http://schemas.xmlsoap.org/soap/encoding/'
    },
    // create an empty body to assign data to later
    's:Body': {}
  };

  actionObject['s:Body'][actionKey] = Object.assign({}, data, {
    '$': {
      'xmlns:u': service
    }
  });

  return xmlBuilder.buildObject(actionObject);
}
