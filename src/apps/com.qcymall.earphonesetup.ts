import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.qcymall.earphonesetup',
  name: 'QCY',
  groups: [
    {
      key: 1,
      name: '局部广告-我的-广告卡片',
      quickFind: true,
      matchTime: 10000,
      resetMatch: 'activity',
      activityIds: 'com.qcymall.earphonesetup.v2ui.activity.V2MainActivity',
      actionMaximum: 1,
      rules: '[vid="close_img_banner"]',
      snapshotUrls: 'https://i.gkd.li/i/13874219',
    },
  ],
});
