module.exports = (function () {
  'use strict';

  var http = require('http'),
      xml2js = require('xml2js');

  function Device(ip, port) {
    this.ip = ip;
    this.port = port || 1400;
    this.deviceDescription = null;

    this.getDeviceDescription(function (error, result) {
      if (error) { throw new Error('An error occurred while getting the device description.'); }
      this.deviceDescription = result;
      console.log(this);
    }.bind(this));
  }

  Device.prototype._prepareData = function (body) {
    return [
      '<?xml version="1.0" encoding="utf-8"?>',
      '<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/" s:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/">',
        '<s:Body>' + body + '</s:Body>',
      '</s:Envelope>'
    ].join('');
  }

  Device.prototype._upnpCall = function (action, upnp, body, cb) {
    if (!action || !body || typeof upnp !== 'object') { return void 0; }

    var responseTagName = 'u:' + action + 'Response',
        requestData = this._prepareData(body),
        requestOptions = {
          host: this.ip,
          port: this.port,
          method: 'POST',
          path: upnp.endpoint,
          headers: {
            'SOAPAction': upnp.service + '#' + action,
            'Content-Type': 'text/xml; charset=utf8',
            'Content-Length': requestData.length
          }
        },
        request;

    request = http.request(requestOptions, function (response) {
      var buffer = '';

      response.on('data', function (chunk) { buffer += chunk; });
      response.on('end', function () {
        xml2js.parseString(buffer, function (error, result) {
          if (error) { cb(error); }

          if (typeof result['s:Envelope']['s:Body'][0]['s:Fault'] !== 'undefined') {
            cb(result['s:Envelope']['s:Body'][0]['s:Fault']);
          }

          cb(void 0, result['s:Envelope']['s:Body'][0][responseTagName]);
        });
      });
    });

    request.write(requestData);
    request.end();
  };

  Device.prototype._upnpLookup = function (action) {
    // contains cases that are meant to fallthrough
    switch(action) {
      case 'GetVolume':
      case 'SetVolume':
      case 'GetMute':
      case 'SetMute':
        return {
          endpoint: '/MediaRenderer/RenderingControl/Control',
          service: 'urn:schemas-upnp-org:service:RenderingControl:1'
        };
        break;
      case 'Play':
      case 'Pause':
      case 'Stop':
        return {
          endpoint: '/MediaRenderer/AVTransport/Control',
          service: 'urn:schemas-upnp-org:service:AVTransport:1'
        };
        break;
      case 'GetLEDState':
        return {
          endpoint: '/DeviceProperties/Control',
          service: 'urn:schemas-upnp-org:service:DeviceProperties:1'
        };
        break;
      default:
        throw new Error('Unrecognized UPNP action.');
        break;
    }
  };

  Device.prototype.getVolume = function (cb) {
    var action = 'GetVolume',
        upnp = this._upnpLookup(action),
        body = [
          '<u:' + action + ' xmlns:u="' + upnp.service + '">',
            '<InstanceID>0</InstanceID>',
            '<Channel>Master</Channel>',
          '</u:' + action + '>'
        ].join('');

    this._upnpCall(action, upnp, body, function (error, result) {
      if (error) {
        cb(error);
      } else {
        // volume is measured from 0 to 100
        cb(error, (+result[0].CurrentVolume[0] / 100));
      }
    });
  };

  Device.prototype.setVolume = function (volume, cb) {
    var action = 'SetVolume',
        upnp = this._upnpLookup(action),
        body = [
          '<u:' + action + ' xmlns:u="' + upnp.service + '">',
            '<InstanceID>0</InstanceID>',
            '<Channel>Master</Channel>',
            '<DesiredVolume>' + volume + '</DesiredVolume>',
          '</u:' + action + '>'
        ].join('');

    this._upnpCall(action, upnp, body, function (error, result) {
      if (typeof cb === 'function') {
        if (error) {
          cb(error);
        } else {
          cb(error, result[0].$['xmlns:u'] === upnp.service);
        }
      }
    });
  };

  Device.prototype.getMute = function (cb) {
    var action = 'GetMute',
        upnp = this._upnpLookup(action),
        body = [
          '<u:' + action + ' xmlns:u="' + upnp.service + '">',
            '<InstanceID>0</InstanceID>',
            '<Channel>Master</Channel>',
          '</u:' + action + '>'
        ].join('');

    this._upnpCall(action, upnp, body, function (error, result) {
      var currentMute;

      if (typeof cb === 'function') {
        if (error) {
          cb(error);
        } else {
          currentMute = !!result[0].CurrentMute[0];
          cb(error, currentMute);
        }
      }
    });
  };

  Device.prototype.setMute = function (mute, cb) {
    var action = 'SetMute',
        upnp = this._upnpLookup(action),
        body = [
          '<u:' + action + ' xmlns:u="' + upnp.service + '">',
            '<InstanceID>0</InstanceID>',
            '<Channel>Master</Channel>',
            '<DesiredMute>' + !!mute + '</DesiredMute>',
          '</u:' + action + '>'
        ].join('');

    this._upnpCall(action, upnp, body, function (error, result) {
      if (typeof cb === 'function') {
        if (error) {
          cb(error);
        } else {
          cb(error, result[0].$['xmlns:u'] === upnp.service);
        }
      }
    });
  };

  Device.prototype.getDeviceDescription = function (cb) {
    var requestURI = 'http://' + this.ip + ':' + this.port + '/xml/device_description.xml';

    http.get(requestURI, function (response) {
      var buffer = '';

      response.on('data', function (chunk) { buffer += chunk; });
      response.on('end', function () {
        xml2js.parseString(buffer, function (error, result) {
          if (error) { cb(error); }

          var device = result.root.device[0];

          cb(void 0, {
            deviceType: device.deviceType[0],
            friendlyName: device.friendlyName[0],
            manufacturer: device.manufacturer[0],
            manufacturerURL: device.manufacturerURL[0],
            modelNumer: device.modelNumber[0],
            modelName: device.modelName[0],
            modelURL: device.modelURL[0],
            softwareVersion: device.softwareVersion[0],
            hardwareVersion: device.hardwareVersion[0],
            serialNum: device.serialNum[0],
            UDN: device.UDN[0],
            icon: {
              mimetype: device.iconList[0].icon[0].mimetype[0],
              width: +device.iconList[0].icon[0].width[0],
              height: +device.iconList[0].icon[0].height[0],
              depth: +device.iconList[0].icon[0].depth[0],
              url: device.iconList[0].icon[0].url[0]
            },
            minCompatibleVersion: device.minCompatibleVersion[0],
            legacyCompatibleVersion: device.legacyCompatibleVersion[0],
            displayVersion: device.displayVersion[0],
            extraVersion: device.extraVersion[0],
            roomName: device.roomName[0],
            displayName: device.displayName[0],
            zoneType: +device.zoneType[0],
            feature1: device.feature1[0],
            feature2: device.feature2[0],
            feature3: device.feature3[0],
            internalSpeakerSize: +device.internalSpeakerSize[0],
            bassExtension: +device.bassExtension[0],
            satGainOffset: +device.satGainOffset[0]
          });
        });
      });
    });
  };

  return Device;

}());
