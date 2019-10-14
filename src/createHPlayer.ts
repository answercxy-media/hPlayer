import videoJs from 'video.js';
import zh_CN from './zh-CN';

function createHPlayer() {
  videoJs.addLanguage('zh_CN', zh_CN);
}

export default createHPlayer;
