import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'cn.com.drivedu.chexuetang',
  name: '车学堂',
  groups: [
    {
      key: 1,
      name: '局部广告-卡片广告',
      desc: '点击关闭',
      rules: [
        {
          quickFind: true,
          activityIds: 'cn.com.drivedu.chexuetang.main.activity.MainActivity_',
          matches:
            '[desc^="dislike"] > @View[clickable=true][visibleToUser=true] <<n [vid="fragment_ad"]',
          exampleUrls:
            'https://m.gkd.li/57941037/16020d11-8e5b-4fb5-8e57-6baaa13ce6a9',
          snapshotUrls: 'https://i.gkd.li/i/15137765',
        },
      ],
    },
  ],
});
