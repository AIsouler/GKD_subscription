import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.powersi.zhrs',
  name: '智慧人社',
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
          matches: '[vid="tv_time"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/1cad6c38-5c76-4b5a-b350-bb9630221661',
          snapshotUrls: 'https://i.gkd.li/i/19746757',
        },
      ],
    },
  ],
});
