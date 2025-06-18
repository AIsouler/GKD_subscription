import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.huawei.lives',
  name: '生活服务',
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
          exampleUrls: 'https://e.gkd.li/f693fb2b-92a6-4aa1-8b0a-9bc5d66c037e',
          snapshotUrls: 'https://i.gkd.li/i/20788828',
        },
      ],
    },
  ],
});
