import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.aiwu.market',
  name: '爱吾游戏宝盒',
  groups: [
    {
      key: 1,
      name: '青少年模式',
      desc: '点击"我知道了"',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches: '[vid="hintTextView2"] + [vid="confirmView"]',
          snapshotUrls: 'https://i.gkd.li/i/14032203',
        },
      ],
    },
  ],
});
