import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.shizi.tool.p3',
  name: '动漫共和国',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      matchRoot: true, // https://github.com/AIsouler/GKD_subscription/issues/1133
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          fastQuery: true,
          matches: '[text*="跳过"][text.length<10][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/b10db699-ed34-4619-b3ca-5821321f4b58',
          snapshotUrls: 'https://i.gkd.li/i/22136545',
        },
      ],
    },
  ],
});
