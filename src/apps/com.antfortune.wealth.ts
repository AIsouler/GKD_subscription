import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.antfortune.wealth',
  name: '蚂蚁财富',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules:
        '@View[clickable=true] <2 [id="com.antfortune.wealth:id/welcome_page"]',
      snapshotUrls: 'https://i.gkd.li/i/12776577',
    },
  ],
});
