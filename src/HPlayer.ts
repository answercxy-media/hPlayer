import videoJs from 'video.js';

// hPlayer默认配置
const defaultOptions = {
  preload: 'auto',
  controls: !0,
  controlBar: {
    volumePanel: {
      inline: !1,
      vertical: !0
    }
  },
  playbackRates: [0.5, 1, 1.5, 2],
  language: 'zh-CN'
};

/**
 * HPlayer播放器类
 * @export
 * @class HPlayer
 */
// TODO: options,readyFunc可精准定位
export class HPlayer {
  constructor(elementId: string, options: Object, readyFunc: Function) {
    const finalOptions = videoJs.mergeOptions(defaultOptions, options);

    return videoJs(elementId, finalOptions, readyFunc);
  }
}
