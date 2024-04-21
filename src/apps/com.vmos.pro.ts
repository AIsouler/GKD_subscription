import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.vmos.pro',
  name: 'VMOS Pro',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      quickFind: true,
      activityIds: 'com.vmos.pro.activities.main.MainActivity',
      rules: '[id="com.vmos.pro:id/iv_dismiss"] ',
      snapshotUrls: 'https://i.gkd.li/i/13536416',
    },
  ],
});
