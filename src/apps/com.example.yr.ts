import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.example.yr',
  name: '剧兔',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      rules: [
        {
          activityIds: 'com.example.yr.MainActivity',
          matches:
            '[id="android:id/content"] >(3,4) FrameLayout[childCount>3] > FrameLayout[childCount=1] > ImageView',
          exampleUrls:
            'https://m.gkd.li/57941037/e5ab8198-9705-4976-8a24-7d128b9a576e',
          snapshotUrls: [
            'https://i.gkd.li/i/16115831',
            'https://i.gkd.li/i/16115830',
          ],
        },
      ],
    },
  ],
});
