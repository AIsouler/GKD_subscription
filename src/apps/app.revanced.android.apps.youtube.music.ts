import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'app.revanced.android.apps.youtube.music',
  name: 'YouTube Music',
  groups: [
    {
      key: 1,
      name: '全屏广告-会员广告',
      rules: [
        {
          fastQuery: true,
          matches:
            '@Button[desc="No thanks"][visibleToUser=true] <<n [vid="custom"]',
          exampleUrls: 'https://e.gkd.li/f07c01d7-9db2-43dd-9a89-ccb3d2a6200e',
          snapshotUrls: 'https://i.gkd.li/i/20448377',
        },
      ],
    },
  ],
});
