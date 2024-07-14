import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.example.administrator.searchpicturetool',
  name: '搜图神器',
  groups: [
    {
      key: 1,
      name: '更新提示',
      desc: '点击取消',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches: '@[text="取消"] + [text="立即升级"]',
          snapshotUrls: 'https://i.gkd.li/i/13989147',
        },
      ],
    },
  ],
});
