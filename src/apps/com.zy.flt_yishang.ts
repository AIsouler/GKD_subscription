import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.zy.flt_yishang',
  name: '飞猫管家',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      rules: 'Button[desc^="跳过广告"][desc.length<=6][clickable=true]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/12641337',
    },
  ],
});
