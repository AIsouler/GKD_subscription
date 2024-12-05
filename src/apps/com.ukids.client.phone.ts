import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.ukids.client.phone',
  name: '小小优趣',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.ukids.client.phone.parent.ParentClientHomeActivity',
          matches: '[id="com.ukids.client.phone:id/dialog_dismiss_btn_two"]',
          snapshotUrls: 'https://i.gkd.li/i/13400238',
        },
      ],
    },
  ],
});
