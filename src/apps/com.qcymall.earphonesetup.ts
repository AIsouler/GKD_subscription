import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.qcymall.earphonesetup',
  name: 'QCY',
  groups: [
    {
      key: 1,
      name: '局部广告-我的-卡片广告',
      fastQuery: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'com.qcymall.earphonesetup.v2ui.activity.V2MainActivity',
          matches: '[vid="close_img_banner"]',
          snapshotUrls: 'https://i.gkd.li/i/13874219',
        },
      ],
    },
  ],
});
