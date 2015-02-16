# Sonos Device Services
All of these services and actions are found in `device_description.xml`. I wanted something easier to read than an XML file.

## Service List

### Alarm Clock (`/xml/AlarmClock1.xml`)
| Key         | Value                                     |
|-------------|-------------------------------------------|
| serviceType | urn:schemas-upnp-org:service:AlarmClock:1 |
| serviceId   | urn:upnp-org:serviceId:AlarmClock         |
| controlURL  | /AlarmClock/Control                       |
| eventSubURL | /AlarmClock/Event                         |

### Music Services (`/xml/MusicServices1.xml`)
| Key         | Value                                        |
|-------------|----------------------------------------------|
| serviceType | urn:schemas-upnp-org:service:MusicServices:1 |
| serviceId   | urn:upnp-org:serviceId:MusicServices         |
| controlURL  | /MusicServices/Control                       |
| eventSubURL | /MusicServices/Event                         |

### Device Properties (`/xml/DeviceProperties1.xml`)
| Key         | Value                                           |
|-------------|-------------------------------------------------|
| serviceType | urn:schemas-upnp-org:service:DeviceProperties:1 |
| serviceId   | urn:upnp-org:serviceId:DeviceProperties         |
| controlURL  | /DeviceProperties/Control                       |
| eventSubURL | /DeviceProperties/Event                         |

### System Properties (`/xml/SystemProperties1.xml`)
| Key         | Value                                           |
|-------------|-------------------------------------------------|
| serviceType | urn:schemas-upnp-org:service:SystemProperties:1 |
| serviceId   | urn:upnp-org:serviceId:SystemProperties         |
| controlURL  | /SystemProperties/Control                       |
| eventSubURL | /SystemProperties/Event                         |

### Zone Group Topology (`/xml/ZoneGroupTopology1.xml`)
| Key         | Value                                            |
|-------------|--------------------------------------------------|
| serviceType | urn:schemas-upnp-org:service:ZoneGroupTopology:1 |
| serviceId   | urn:upnp-org:serviceId:ZoneGroupTopology         |
| controlURL  | /ZoneGroupTopology/Control                       |
| eventSubURL | /ZoneGroupTopology/Event                         |

### Group Management (`/xml/GroupManagement1.xml`)
| Key         | Value                                          |
|-------------|------------------------------------------------|
| serviceType | urn:schemas-upnp-org:service:GroupManagement:1 |
| serviceId   | urn:upnp-org:serviceId:GroupManagement         |
| controlURL  | /GroupManagement/Control                       |
| eventSubURL | /GroupManagement/Event                         |

### QPlay (`/xml/QPlay1.xml`)
| Key         | Value                                     |
|-------------|-------------------------------------------|
| serviceType | urn:schemas-tencent-com:service:QPlay:1   |
| serviceId   | urn:tencent-com:serviceId:QPlay           |
| controlURL  | /QPlay/Control                            |
| eventSubURL | /QPlay/Event                              |

### Media Server

#### Content Directory (`/xml/ContentDirectory1.xml`)
| Key         | Value                                           |
|-------------|-------------------------------------------------|
| serviceType | urn:schemas-upnp-org:service:ContentDirectory:1 |
| serviceId   | urn:upnp-org:serviceId:ContentDirectory         |
| controlURL  | /MediaServer/ContentDirectory/Control           |
| eventSubURL | /MediaServer/ContentDirectory/Event             |

#### Connection Manager (`/xml/ConnectionManager1.xml`)
| Key         | Value                                            |
|-------------|--------------------------------------------------|
| serviceType | urn:schemas-upnp-org:service:ConnectionManager:1 |
| serviceId   | urn:upnp-org:serviceId:ConnectionManager         |
| controlURL  | /MediaServer/ConnectionManager/Control           |
| eventSubURL | /MediaServer/ConnectionManager/Event             |

### Media Renderer

#### Rendering Control (`/xml/RenderingControl1.xml`)
| Key         | Value                                           |
|-------------|-------------------------------------------------|
| serviceType | urn:schemas-upnp-org:service:RenderingControl:1 |
| serviceId   | urn:upnp-org:serviceId:RenderingControl         |
| controlURL  | /MediaRenderer/RenderingControl/Control         |
| eventSubURL | /MediaRenderer/RenderingControl/Event           |

#### Connection Manager (`/xml/ConnectionManager1.xml`)
| Key         | Value                                            |
|-------------|--------------------------------------------------|
| serviceType | urn:schemas-upnp-org:service:ConnectionManager:1 |
| serviceId   | urn:upnp-org:serviceId:ConnectionManager         |
| controlURL  | /MediaRenderer/ConnectionManager/Control         |
| eventSubURL | /MediaRenderer/ConnectionManager/Event           |

#### AVTransport (`/xml/AVTransport1.xml`)
| Key         | Value                                      |
|-------------|--------------------------------------------|
| serviceType | urn:schemas-upnp-org:service:AVTransport:1 |
| serviceId   | urn:upnp-org:serviceId:AVTransport         |
| controlURL  | /MediaRenderer/AVTransport/Control         |
| eventSubURL | /MediaRenderer/AVTransport/Event           |

#### Queue (`/xml/Queue1.xml`)
| Key         | Value                                     |
|-------------|-------------------------------------------|
| serviceType | urn:schemas-sonos-com:service:Queue:1     |
| serviceId   | urn:sonos-com:serviceId:Queue             |
| controlURL  | /MediaRenderer/Queue/Control              |
| eventSubURL | /MediaRenderer/Queue/Event                |

#### Group Rendering Control (`/xml/GroupRenderingControl1.xml`)
| Key         | Value                                                |
|-------------|------------------------------------------------------|
| serviceType | urn:schemas-upnp-org:service:GroupRenderingControl:1 |
| serviceId   | urn:upnp-org:serviceId:GroupRenderingControl         |
| controlURL  | /MediaRenderer/GroupRenderingControl/Control         |
| eventSubURL | /MediaRenderer/GroupRenderingControl/Event           |
