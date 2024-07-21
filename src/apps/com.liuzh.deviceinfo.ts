import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.liuzh.deviceinfo',
  name: '设备信息',
  groups: [
    {
      key: 1,
      name: '分段广告-卡片广告',
      desc: '点击关闭',
      rules: [
        {
          key: 0,
          fastQuery: true,
          activityIds: 'com.liuzh.deviceinfo.MainActivity',
          matches:
            'FrameLayout[childCount=3 || childCount=4] > ImageView[text=null] +(2,3) @FrameLayout[childCount=1] > ImageView[childCount=0] <<n [vid="ad_container"]',
          exampleUrls: 'https://e.gkd.li/250d3229-a933-410b-8a4a-daccb366558c',
          snapshotUrls: [
            'https://i.gkd.li/i/16322794',
            'https://i.gkd.li/i/16322793',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          activityIds: 'com.qq.e.ads.ADActivity',
          matches:
            'FrameLayout[childCount=3] > TextView[text!=null] + ImageView[clickable=true][text=null][childCount=0]',
          exampleUrls: 'https://e.gkd.li/ce0348d0-f864-4e52-b235-2e83ec7c20ac',
          snapshotUrls: 'https://i.gkd.li/i/16322792',
        },
      ],
    },
  ],
});
