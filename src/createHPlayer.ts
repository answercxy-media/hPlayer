import videoJs from 'video.js';
import zh_CN from './zh-CN';

function createHPlayer() {
  videoJs.addLanguage('zh-CN', zh_CN);
}

export { createHPlayer };
