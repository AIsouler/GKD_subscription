import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.eco.global.app',
  name: 'ECOVACS HOME',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: 'ImageView[id="com.eco.global.app:id/adview_jump"]',
      snapshotUrls: 'https://i.gkd.li/i/13538616',
    },
  ],
});
