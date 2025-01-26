import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.google.android.youtube',
  name: 'youtube',
  groups: [
    {
      key: 0,
      name: '全屏广告-视频播放-跳过广告',
      rules: [
        {
          fastQuery: true,
          key: 0,
          activityIds: [
            'com.google.android.apps.youtube.app.watchwhile.WatchWhileActivity',
            'com.google.android.apps.youtube.app.watchwhile.MainActivity',
            'com.google.android.youtube',
          ],
          matches:
            '[vid="skip_ad_button" || id="com.google.android.youtube:id/modern_skip_ad_text"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13797491',
            'https://i.gkd.li/i/12565261',
            'https://i.gkd.li/i/13705106',
          ],
        },
      ],
    },
    {
      key: 1,
      name: '全屏广告-视频播放-赞助商广告',
      fastQuery: true,
      activityIds: [
        'com.google.android.apps.youtube.app.watchwhile.WatchWhileActivity',
        'com.google.android.apps.youtube.app.watchwhile.MainActivity',
      ],
      rules: [
        {
          matches:
            '@[desc="关闭广告面板" || desc="Close ad panel"] <<n [vid="panel_header"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13797491',
            'https://i.gkd.li/i/13705106',
            'https://i.gkd.li/i/14784199',
          ],
        },
      ],
    },
    {
      key: 3,
      name: '全屏广告-会员广告',
      rules: [
        {
          fastQuery: true,
          activityIds:
            'com.google.android.apps.youtube.app.watchwhile.MainActivity',
          matches:
            '@[desc="不用了，谢谢" || desc="关闭" || desc="Close"][visibleToUser=true] <<n [vid="bottom_ui_container" || vid="custom"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13797512',
            'https://i.gkd.li/i/18017075',
            'https://i.gkd.li/i/18549944',
          ],
        },
      ],
    },
    {
      key: 4,
      name: '权限提示-通知权限',
      fastQuery: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds:
            'com.google.android.apps.youtube.app.watchwhile.MainActivity',
          matches: ['[text="开启通知"]', '[text="不用了"]'],
          snapshotUrls: 'https://i.gkd.li/i/14194155',
        },
      ],
    },
    {
      key: 5,
      name: '功能类-自动翻译评论',
      desc: '评论区自动点击[翻译成中文]',
      rules: [
        {
          fastQuery: true,
          actionCd: 500,
          activityIds:
            'com.google.android.apps.youtube.app.watchwhile.MainActivity',
          matches:
            '@Button[desc^="翻译成中文"][clickable=true][visibleToUser=true] <<n [vid="results" || vid="section_list"]',
          exampleUrls: 'https://e.gkd.li/e9d6eaa8-9fbf-4b16-8f0c-50239597c687',
          snapshotUrls: [
            'https://i.gkd.li/i/17068544', // 翻译前
            'https://i.gkd.li/i/17068647', // 翻译后
            'https://i.gkd.li/i/17501400',
          ],
        },
      ],
    },
  ],
});
