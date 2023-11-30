import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.wenhua.bamboo',
  name: '随身行',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[text*="跳过"][text.length<=10]',
      snapshotUrls: 'https://i.gkd.li/import/13445602',
    },
    {
      key: 1,
      name: '通知弹窗',
      desc: '点击稍后再说',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'com.wenhua.bamboo.screen.activity.MarketOptionActivity',
          matches: '@Button[text="稍后再说"] +2 Button[text="马上开启"]',
          snapshotUrls: 'https://i.gkd.li/import/13407555',
        },
      ],
    },
  ],
});
