import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'kha.prog.mikrotik',
  name: 'NetShare',
  groups: [
    {
      key: 1,
      name: '关闭展示广告',
      desc: '点击关闭',
      rules: [
        {
          quickFind: true,
          activityIds: null,
          matches: '[id="android:id/button1"]',
          exampleUrls: 'https://m.gkd.li/152465495/a6d10297-ad48-4b00-9601-844d5f2ada59',
          snapshotUrls: 'https://i.gkd.li/i/15804005',
        },
      ],
    },
  ],
});