import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.taobao.litetao',
  name: '淘特',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.taobao.ltao.maintab.MainFrameActivity',
      rules:
        '[id="com.taobao.litetao:id/root_layout"] > TextView[text^="还剩"&&text$="秒"]',
      snapshotUrls: 'https://gkd-kit.songe.li/import/12774851',
    },
  ],
});
