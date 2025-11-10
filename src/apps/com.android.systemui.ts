import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.android.systemui',
  name: '系统界面',
  groups: [
    {
      key: 1,
      name: '功能类-允许网易云音乐共享整个屏幕',
      rules: [
        {
          key: 1,
          fastQuery: true,
          activityIds:
            '.mediaprojection.permission.MediaProjectionPermissionActivity',
          matches: [
            '[text="要与“网易云音乐”共享屏幕吗？"]',
            '[text="共享一个应用"] < [vid="screen_share_mode_spinner"][clickable=true]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/23451390',
        },
        {
          preKeys: [1],
          key: 2,
          fastQuery: true,
          activityIds:
            '.mediaprojection.permission.MediaProjectionPermissionActivity',
          matches: [
            '[text="共享一个应用"]',
            '@[clickable=true] > [text="共享整个屏幕"]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/23451403',
        },
        {
          preKeys: [2],
          key: 3,
          fastQuery: true,
          activityIds:
            '.mediaprojection.permission.MediaProjectionPermissionActivity',
          matches: [
            '[text="要与“网易云音乐”共享屏幕吗？"]',
            '[text="共享整个屏幕"] < [vid="screen_share_mode_spinner"]',
            'Button[text="共享屏幕"][clickable=true]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/23451416',
        },
      ],
    },
  ],
});
