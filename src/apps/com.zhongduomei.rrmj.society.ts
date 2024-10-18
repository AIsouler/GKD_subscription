import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.zhongduomei.rrmj.society',
  name: '人人视频',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          matches: '[text*="跳过"][text.length<10][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/6765a074-2482-42d7-97a2-23d5789078d9',
          snapshotUrls: 'https://i.gkd.li/i/16569340',
        },
      ],
    },
  ],
});
