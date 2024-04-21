import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'cn.nlyuming.duanju.ting',
  name: '星影视频',
  groups: [
    {
      key: 1,
      name: '功能类-[您还未登录]弹窗',
      desc: '点击关闭',
      rules: [
        {
          activityIds: 'cn.nlyuming.duanju.ting.MainActivity',
          matches:
            '[id="android:id/content"] >5 FrameLayout[childCount=3] >2 ImageView[visibleToUser=true]',
          exampleUrls:
            'https://m.gkd.li/57941037/3041769f-b644-460b-b0de-9c2a84518849',
          snapshotUrls: 'https://i.gkd.li/i/14321891',
        },
      ],
    },
  ],
});
