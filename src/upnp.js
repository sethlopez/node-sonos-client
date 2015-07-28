import http from 'http';
import {UPnPError} from './errors';
import xml2js from 'xml2js';

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
              console.log('xmlParser error');
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

  static post(address, endpoint, serviceType, action, data) {
    const payload = envelop(serviceType, action, data);
    const options = {
      host: address,
      port: 1400,
      method: 'POST',
      path: endpoint,
      headers: {
        'SOAPAction': `${serviceType}#${action}`,
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
              console.log('xmlParser error');
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
        console.log('http.request error');
        reject(error);
      });

      request.write(payload);
      request.end();
    });
  }
}

function envelop(serviceType, action, data) {
  const tagName = `u:${action}`;
  const xmlData = {
    // these attributes will go on the root node
    '$': {
      'xmlns:s': 'http://schemas.xmlsoap.org/soap/envelope/',
      's:encodingStyle': 'http://schemas.xmlsoap.org/soap/encoding/'
    },
    // create an empty body to assign data to later
    's:Body': {}
  };

  xmlData['s:Body'][tagName] = Object.assign({}, data, {
    '$': {
      'xmlns:u': serviceType
    }
  });

  console.log(JSON.stringify(xmlData, null, 2));

  return xmlBuilder.buildObject(xmlData);
}
