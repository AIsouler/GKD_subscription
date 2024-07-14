import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.ukids.client.phone',
  name: '小小优趣',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      activityIds: ['com.ukids.client.phone.parent.ParentClientHomeActivity'],
      rules: [
        {
          fastQuery: true,
          matches: '[id="com.ukids.client.phone:id/dialog_dismiss_btn_two"]',
          snapshotUrls: ['https://i.gkd.li/i/13400238'],
        },
      ],
    },
  ],
});
