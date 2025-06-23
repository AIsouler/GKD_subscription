import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'app.revanced.android.youtube',
  name: 'YouTube',
  groups: [
    {
      key: 1,
      name: '全屏广告-会员广告',
      desc: '点击关闭',
      rules: [
        {
          fastQuery: true,
          activityIds:
            'com.google.android.apps.youtube.app.watchwhile.MainActivity',
          matches:
            '@Button[desc="Close"][clickable=true][visibleToUser=true][width<150 && height<150] <<n [vid="custom"]',
          exampleUrls: 'https://e.gkd.li/3c45eae4-383d-489b-ae58-f58d70ea4478',
          snapshotUrls: 'https://i.gkd.li/i/20856330',
        },
      ],
    },
  ],
});
