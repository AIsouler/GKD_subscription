import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.sankuai.movie',
  name: '猫眼',
  groups: [
    {
      key: 1,
      name: '更新提示',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      quickFind: true,
      rules: '[text^="更新"] +(3) LinearLayout > [text="取消"]',
      snapshotUrls: [
        'https://i.gkd.li/i/12649942',
        'https://i.gkd.li/i/12649938',
        'https://i.gkd.li/i/13799885',
      ],
    },
  ],
});
