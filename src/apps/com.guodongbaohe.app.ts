import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.guodongbaohe.app',
  name: '果冻宝盒',
  groups: [
    // key0-5作为开屏、更新、消息提醒等通用规则
    {
      key: 6,
      name: '全屏广告-弹窗广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.guodongbaohe.app.activity.AdvertisementTwoActivity',
          matches: 'LinearLayout[id="com.guodongbaohe.app:id/close_dialog_lv"]',
          snapshotUrls: 'https://i.gkd.li/i/13577877',
        },
      ],
    },
  ],
});
