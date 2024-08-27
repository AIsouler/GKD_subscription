import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.fenbi.android.solar',
  name: '小猿搜题',
  groups: [
    {
      key: 1,
      name: '更新提示',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
        {
          matches: [
            '[id="com.fenbi.android.solar:id/text_upgrade"]',
            '[id="com.fenbi.android.solar:id/img_close"]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/13246056',
        },
      ],
    },
    {
      key: 2,
      name: '评价提示',
      desc: '点击"返回"',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
        {
          matches: '[id="com.fenbi.android.solar:id/tv_cancel"]',
          exampleUrls:
            'https://m.gkd.li/57941037/7864769f-542c-4f76-8b90-4d030b53651b',
          snapshotUrls: 'https://i.gkd.li/i/14136539',
        },
      ],
    },
    {
      key: 3,
      name: '全屏广告-年卡广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
        {
          matches: '[id="com.fenbi.android.solar:id/v_firework_close"]',
          exampleUrls: 'https://e.gkd.li/874cdabf-8e49-4c6d-8fd0-48effd6e44e9',
          snapshotUrls: 'https://i.gkd.li/i/16759322',
        },
      ],
    },
  ],
});
