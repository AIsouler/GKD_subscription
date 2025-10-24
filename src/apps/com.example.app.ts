import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.example.app',
  name: 'JMComic3',
  groups: [
    {
      key: 1,
      name: '全屏广告',
      desc: '关闭选择线路后的全屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          action: 'clickCenter', // clickNode 无响应
          activityIds: '.MainActivity',
          matches: '@Button[clickable=true] - [text^="看完等待"]',
          exampleUrls: 'https://e.gkd.li/df4c585e-acd7-49b5-af76-e53175ffb42c',
          snapshotUrls: 'https://i.gkd.li/i/21399047',
        },
      ],
    },
  ],
});
