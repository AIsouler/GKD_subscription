import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.baidu.haokan',
  name: '好看视频',
  groups: [
    {
      key: 3,
      name: '青少年模式',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[text="进入青少年模式"] + [text="我知道了"]',
      snapshotUrls: 'https://i.gkd.li/i/13498610',
    },
  ],
});
