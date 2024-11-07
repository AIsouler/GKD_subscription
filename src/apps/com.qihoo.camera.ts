import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.qihoo.camera',
  name: '360摄像机',
  groups: [
    {
      key: 6,
      name: '局部广告-卡片广告',
      rules: [
        {
          actionMaximum: 1,
          activityIds: 'com.qihoo.jia.playpage.RecordPlayActivity',
          name: '云收藏弹窗广告',
          matches:
            'ViewGroup > @ImageView[clickable=true] -n TextView[text="云收藏"]',
          snapshotUrls: 'https://i.gkd.li/i/13630755',
        },
      ],
    },
    {
      key: 7,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'com.qihoo.jia.ui.activity.TabMainActivity',
          matches:
            '[id="android:id/content"] >2 FrameLayout[childCount=3] > FrameLayout[childCount=5] > FrameLayout[childCount=1] > ImageView[childCount=0]',
          exampleUrls: 'https://e.gkd.li/c88cdec7-e6da-4bbf-821c-76459d0daff9',
          snapshotUrls: 'https://i.gkd.li/i/17656326',
        },
      ],
    },
  ],
});
