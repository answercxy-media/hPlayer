import videojs from 'video.js';

/**
 *
 * @export
 * @class HPlayer
 */
export class HPlayer {
  constructor(elementId, options, readyFunc) {
    return videojs(elementId, options, readyFunc);
  }
}
