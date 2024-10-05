import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.topgether.sixfoot',
  name: '六只脚',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      rules: [
        {
          key: 0,
          fastQuery: true,
          activityIds: 'Pro.biz.home.ProMainActivity',
          matches: '[vid="iv_close"]',
          exampleUrls: 'https://e.gkd.li/fc4a468d-407f-4a70-add8-26487f35933f',
          snapshotUrls: 'https://i.gkd.li/i/17265831',
        },
        {
          key: 1,
          activityIds: 'Pro.biz.record.RecordMainActivity',
          matches:
            '[id="android:id/content"] >4 FrameLayout[childCount=2] > FrameLayout[childCount=3] > FrameLayout[childCount=1] > ImageView[childCount=0][text=null]',
          exampleUrls: 'https://e.gkd.li/01fd3dff-c1e9-42b3-bdb1-05124a67504b',
          snapshotUrls: 'https://i.gkd.li/i/17265832',
        },
      ],
    },
  ],
});
