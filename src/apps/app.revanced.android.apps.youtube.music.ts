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
          key: 0,
          fastQuery: true,
          anyMatches: [
            '@Button[desc="No thanks"][visibleToUser=true] <<n [vid="custom"]',
            '[text="No thanks"][visibleToUser=true]',
          ],
          exampleUrls: [
            'https://e.gkd.li/f07c01d7-9db2-43dd-9a89-ccb3d2a6200e',
            'https://e.gkd.li/d1fbcb9c-bcc8-466e-9e94-63c4c7a22fd2',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/20448377',
            'https://i.gkd.li/i/20598829',
          ],
        },
        {
          key: 1,
          fastQuery: true,
          activityIds:
            'com.google.android.apps.youtube.music.activities.MusicActivity',
          matches:
            '@Button[desc="Close"][clickable=true][visibleToUser=true][width<150&&height<150] <<n [vid="custom"]',
          exampleUrls: 'https://e.gkd.li/2048d5b5-514f-46fa-9970-d442b1656fb0',
          snapshotUrls: [
            'https://i.gkd.li/i/20648224',
            'https://i.gkd.li/i/20856350',
          ],
        },
      ],
    },
  ],
});
