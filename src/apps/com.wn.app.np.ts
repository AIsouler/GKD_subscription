import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.wn.app.np',
  name: 'NP管理器',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      rules: [
        {
          activityIds: 'player.normal.np.activity.CommonEditActivity',
          matches:
            '[id="android:id/content"] FrameLayout[index=2][childCount=1] > ImageView',
          exampleUrls:
            'https://m.gkd.li/57941037/b75f4ba1-7e40-4ea2-9f65-20b61f018720',
          snapshotUrls: 'https://i.gkd.li/i/14722550',
        },
      ],
    },
  ],
});
