import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.ponyemu.main',
  name: '小马模拟器',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.ponyemu.main.activitys.AdLaunchActivity',
      rules: '[id="com.ponyemu.main:id/time"] +2 [text="跳过"]',
      snapshotUrls: 'https://i.gkd.li/import/12783200',
    },
  ],
});
