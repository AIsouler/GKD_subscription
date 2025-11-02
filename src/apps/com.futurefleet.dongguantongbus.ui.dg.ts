import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.futurefleet.dongguantongbus.ui.dg',
  name: '东莞通',
  groups: [
    {
      key: 1,
      name: '局部广告',
      desc: '点击关闭',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.unionpay.smartDG.activity.UPMainActivity',
          matches:
            'FrameLayout[childCount=5] > FrameLayout[childCount=1] > @ImageView[childCount=0][width<60 && height<60] <<n [vid="flow_ad_fl_container_view"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/fd24a381-82eb-4dc2-80f8-410783a1a680',
          snapshotUrls: 'https://i.gkd.li/i/23290739',
        },
      ],
    },
  ],
});
