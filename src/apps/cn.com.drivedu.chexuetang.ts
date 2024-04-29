import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'cn.com.drivedu.chexuetang',
  name: '车学堂',
  groups: [
    {
      key: 1,
      name: '局部广告-卡片广告',
      desc: '点击关闭',
      quickFind: true,
      rules: [
        {
          key: 0,
          activityIds: 'cn.com.drivedu.chexuetang.main.activity.MainActivity_',
          matches:
            '[desc^="dislike"] > @View[clickable=true][visibleToUser=true] <<n [vid="fragment_ad"]',
          exampleUrls:
            'https://m.gkd.li/57941037/16020d11-8e5b-4fb5-8e57-6baaa13ce6a9',
          snapshotUrls: 'https://i.gkd.li/i/15137765',
        },
        {
          key: 1,
          activityIds: 'cn.com.drivedu.chexuetang.main.activity.MainActivity_',
          matches:
            'FrameLayout[childCount=5] > FrameLayout > @ImageView[visibleToUser=true] <<n [vid="fragment_ad"]',
          exampleUrls:
            'https://m.gkd.li/57941037/402dc635-354e-4c4b-a6b9-0eebeecfee0d',
          snapshotUrls: 'https://i.gkd.li/i/15148368',
        },
      ],
    },
  ],
});
