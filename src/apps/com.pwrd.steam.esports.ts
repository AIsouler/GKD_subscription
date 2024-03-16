import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.pwrd.steam.esports',
  name: '完美世界电竞',
  groups: [
    {
      key: 1,
      name: '通知提示-开启推送通知弹窗',
      desc: '点击关闭',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          quickFind: true,
          matches: '[text="开启推送通知"] + [vid="tv_close"]',
          exampleUrls:
            'https://m.gkd.li/57941037/6bb3a2b3-5511-4655-9e4a-c0eb6bae27ad',
          snapshotUrls: 'https://i.gkd.li/i/14622501',
        },
      ],
    },
  ],
});
