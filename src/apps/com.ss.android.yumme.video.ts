import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.ss.android.yumme.video',
  name: '抖音精选',
  groups: [
    {
      key: 1,
      name: '青少年模式',
      fastQuery: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          action: 'back',
          matches: 'Button[text="开启青少年模式"]',
          snapshotUrls: 'https://i.gkd.li/i/15858125',
        },
      ],
    },
    {
      key: 2,
      name: '更新提示',
      fastQuery: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          matches: ['[text="立即升级"]', '[text="以后再说"]'],
          snapshotUrls: [
            'https://i.gkd.li/import/12534016',
            'https://i.gkd.li/import/13328599',
          ],
        },
      ],
    },
    {
      key: 3,
      name: '评价提示',
      fastQuery: true,
      actionMaximum: 1,
      matchTime: 10000,
      rules: [
        {
          action: 'back',
          matches: 'TextView[text="去商店评分"]',
          snapshotUrls: 'https://i.gkd.li/i/15858132',
        },
      ],
    },
  ],
});
