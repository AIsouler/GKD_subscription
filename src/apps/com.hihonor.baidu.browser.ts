import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.hihonor.baidu.browser',
  name: '荣耀浏览器',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      activityIds: ['com.baidu.searchbox.MainActivity'],
      rules: [
        {
          matches: 'TextView[text~=\'跳过 \\\\d\']',
          snapshotUrls: 'https://i.gkd.li/i/18279202',
        },
      ],
    },
  ],
});
