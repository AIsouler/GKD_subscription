import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.jovetech.CloudSee.temp',
  name: '云视通',
  groups: [
    {
      key: 1,
      name: '局部广告-卡片广告',
      desc: '点击关闭',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.jovision.saas.multiplay.ui.JVMultiPlayActivity',
          matches:
            'FrameLayout[childCount=5] > FrameLayout[childCount=1] > @ImageView[childCount=0][text=null] <<n [vid="mAdContainer"]',
          exampleUrls: 'https://e.gkd.li/1118299d-d74c-4f64-b5c8-fa1d8d2a48db',
          snapshotUrls: 'https://i.gkd.li/i/16537379',
        },
      ],
    },
    {
      key: 2,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      rules: [
        {
          activityIds: 'com.jovision.saas.ui.activity.main.MainActivity',
          matches:
            '[id="android:id/content"] >(3,4) FrameLayout[childCount>3] > FrameLayout[childCount=1] > ImageView[childCount=0][text=null]',
          exampleUrls: 'https://e.gkd.li/92d3c1a3-3990-4f2c-b564-6f79f69f9b14',
          snapshotUrls: 'https://i.gkd.li/i/16567977',
        },
      ],
    },
  ],
});
