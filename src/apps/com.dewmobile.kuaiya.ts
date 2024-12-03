import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.dewmobile.kuaiya',
  name: '快牙',
  groups: [
    {
      key: 1,
      name: '局部广告-卡片广告',
      rules: [
        {
          key: 0,
          name: '腾讯广告',
          fastQuery: true,
          activityIds: 'com.dewmobile.kuaiya.act.MainActivity',
          matches:
            'FrameLayout[childCount=5] > FrameLayout[childCount=1] > @ImageView[childCount=0][visibleToUser=true] <<n [id="com.dewmobile.kuaiya:id/sdk_container"]',
          snapshotUrls: 'https://i.gkd.li/i/13477048',
        },
      ],
    },
  ],
});
