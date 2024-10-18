import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tencent.qqsports',
  name: '腾讯体育',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          matches: 'TextView[text*="跳过"][text.length<=10]',
          snapshotUrls: 'https://i.gkd.li/i/14032883',
        },
      ],
    },
  ],
});
