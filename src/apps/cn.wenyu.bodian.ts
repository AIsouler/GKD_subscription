import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'cn.wenyu.bodian',
  name: '波点音乐',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          fastQuery: true,
          action: 'clickCenter',
          matches: '[text*="跳过"][text.length<10][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/349c0f9e-a1d2-4e1d-bd6e-e42c3b3c01a6',
          snapshotUrls: 'https://i.gkd.li/i/22845785',
        },
      ],
    },
  ],
});
