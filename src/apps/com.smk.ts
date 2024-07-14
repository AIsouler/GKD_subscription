import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.smk',
  name: '杭州市民卡',
  groups: [
    {
      key: 3,
      name: '全屏广告-弹窗广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: [
        'com.smk.activity.MainActivity',
        'com.smk.activity.LaunchActivity',
      ],
      rules: '[id="com.smk:id/iv_close_ad"]',
      snapshotUrls: [
        'https://i.gkd.li/i/13402584',
        'https://i.gkd.li/i/13425013', // activityIds: 'com.smk.activity.LaunchActivity',
      ],
    },
  ],
});
