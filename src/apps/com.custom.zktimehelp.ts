import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.custom.zktimehelp',
  name: 'ZK助手',
  groups: [
    {
      key: 1,
      name: '全屏广告',
      rules: [
        {
          key: 0,
          activityIds: 'com.custom.zktimehelp.ui.MainActivity',
          matches:
            '[id="android:id/content"] >(3,4) FrameLayout[childCount>3] > FrameLayout[childCount=1] > ImageView[childCount=0][text=null]',
          exampleUrls: 'https://e.gkd.li/95f17fff-486c-4cad-83c7-804b808ff800',
          snapshotUrls: 'https://i.gkd.li/i/16670372',
        },
        {
          key: 1,
          activityIds: 'com.qq.e.ads.PortraitADActivity',
          matches:
            'FrameLayout[childCount=5] > FrameLayout[childCount=2] > FrameLayout[childCount=2] >2 @FrameLayout[childCount=1] > ImageView[childCount=0]',
          exampleUrls: 'https://e.gkd.li/cacb889d-0328-4431-af23-d267fa4eb626',
          snapshotUrls: 'https://i.gkd.li/i/16670426',
        },
      ],
    },
  ],
});
