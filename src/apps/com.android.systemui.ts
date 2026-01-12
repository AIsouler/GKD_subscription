import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.android.systemui',
  name: '系统界面',
  groups: [
    // 以下规则组快照截取自小米手机，可能不适配其他系统。
    {
      key: 1,
      name: '功能类-自动允许网易云音乐共享整个屏幕',
      fastQuery: true,
      activityIds:
        '.mediaprojection.permission.MediaProjectionPermissionActivity',
      rules: [
        {
          key: 1,
          matches: [
            '[text="要与“网易云音乐”共享屏幕吗？"]',
            '[vid="screen_share_mode_spinner"][clickable=true]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/23451390',
        },
        {
          preKeys: [1],
          key: 2,
          matches: '@[clickable=true] > [text="共享整个屏幕"]',
          snapshotUrls: 'https://i.gkd.li/i/23451403',
        },
        {
          preKeys: [2],
          key: 3,
          matches: 'Button[text="共享屏幕"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/23451416',
        },
      ],
    },
    {
      key: 2,
      name: '功能类-自动允许白描共享整个屏幕',
      fastQuery: true,
      activityIds:
        '.mediaprojection.permission.MediaProjectionPermissionActivity',
      rules: [
        {
          key: 1,
          matches: [
            '[text="要与“白描”共享屏幕吗？"]',
            '[vid="screen_share_mode_spinner"][clickable=true]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/23451390',
        },
        {
          preKeys: [1],
          key: 2,
          matches: '@[clickable=true] > [text="共享整个屏幕"]',
          snapshotUrls: 'https://i.gkd.li/i/23451403',
        },
        {
          preKeys: [2],
          key: 3,
          matches: 'Button[text="共享屏幕"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/23451416',
        },
      ],
    },
    {
      key: 3,
      name: '功能类-自动允许QQ音乐共享整个屏幕',
      fastQuery: true,
      activityIds:
        '.mediaprojection.permission.MediaProjectionPermissionActivity',
      rules: [
        {
          key: 1,
          matches: [
            '[text="要与“QQ音乐”共享屏幕吗？"]',
            '[vid="screen_share_mode_spinner"][clickable=true]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/23451390',
        },
        {
          preKeys: [1],
          key: 2,
          matches: '@[clickable=true] > [text="共享整个屏幕"]',
          snapshotUrls: 'https://i.gkd.li/i/23451403',
        },
        {
          preKeys: [2],
          key: 3,
          matches: 'Button[text="共享屏幕"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/23451416',
        },
      ],
    },
  ],
});
