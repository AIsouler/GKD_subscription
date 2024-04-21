import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.kk.ysk3.tz12063k',
  name: '可可影视',
  groups: [
    {
      key: 1,
      name: '通知提示-公告弹窗',
      desc: '点击[朕知道了]',
      rules: [
        {
          quickFind: true,
          activityIds: 'com.salmon.film.main.ui.MainActivity',
          matches: '[text="朕知道了"][clickable=true][visibleToUser=true]',
          exampleUrls:
            'https://m.gkd.li/57941037/c93d9be8-559a-46aa-8416-f52a7c99df4b',
          snapshotUrls: 'https://i.gkd.li/i/14321907',
        },
      ],
    },
  ],
});
