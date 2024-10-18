import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.taobao.movie.android',
  name: '淘票票',
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
          exampleUrls: 'https://e.gkd.li/b0b7bd5e-89fc-4079-b17f-1b1cf4938658',
          snapshotUrls: 'https://i.gkd.li/i/16498740',
        },
      ],
    },
  ],
});
