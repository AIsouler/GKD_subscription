import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.eusoft.ting.en',
  name: '每日英语听力',
  groups: [
    {
      key: 1,
      name: '全屏广告-优惠券弹窗',
      desc: '点击[暂不需要]',
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          quickFind: true,
          activityIds: 'com.eusoft.ting.ui.v2.TabActivityV2',
          matches: '[text="我的优惠券"] +2 * > [text="暂不需要"]',
          exampleUrls:
            'https://m.gkd.li/57941037/87566d74-abe0-46b6-a376-d1231c6a025a',
          snapshotUrls: 'https://i.gkd.li/i/14583029',
        },
      ],
    },
  ],
});
