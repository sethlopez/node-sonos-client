// only way to get these exports to work at the moment is to export the import
// as their name - not ideal
import MediaRenderer from './devices/media-renderer';
import MediaServer from './devices/media-server';

export default {
  MediaRenderer,
  MediaServer
};
