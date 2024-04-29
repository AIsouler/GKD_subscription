import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.sec.android.app.music',
  name: 'Samsung Music',
  groups: [
    {
      key: 1,
      name: '功能类-[优化电池使用量]弹窗',
      desc: '点击[取消]',
      rules: [
        {
          quickFind: true,
          activityIds:
            'com.sec.android.app.music.common.activity.MusicMainActivity',
          matches: [
            '[text="是否为三星音乐关闭优化电池使用量？"]',
            '[text="取消"]',
          ],
          exampleUrls:
            'https://m.gkd.li/57941037/884ae3c4-5b94-4213-939c-9da783dd0be9',
          snapshotUrls: 'https://i.gkd.li/i/15144792',
        },
      ],
    },
  ],
});
