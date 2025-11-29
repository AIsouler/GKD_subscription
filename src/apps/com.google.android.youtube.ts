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
            '[!(getChild(0).getChild(0).desc="Image attachment")] + @[desc="不用了，谢谢" || desc="关闭" || desc="Close" || desc="No thanks"][visibleToUser=true] <<n [vid="bottom_ui_container" || vid="custom"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13797512',
            'https://i.gkd.li/i/18017075',
            'https://i.gkd.li/i/18549944',
            'https://i.gkd.li/i/19578085',
          ],
          excludeSnapshotUrls: 'https://i.gkd.li/i/21978683',
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
    {
      key: 6,
      name: '其他-关闭播放器辅助功能弹窗',
      desc: '点击[Dismiss]',
      rules: [
        {
          fastQuery: true,
          activityIds:
            'com.google.android.apps.youtube.app.watchwhile.MainActivity',
          matches: '[text="Dismiss"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/aa8f2617-fd6d-43a8-951d-1bd6efc504d3',
          snapshotUrls: 'https://i.gkd.li/i/19930694',
        },
      ],
    },
    {
      key: 7,
      name: '功能类-关闭视频播放结束后的推荐视频',
      rules: [
        {
          fastQuery: true,
          activityIds:
            'com.google.android.apps.youtube.app.watchwhile.MainActivity',
          anyMatches: [
            '@[vid="close_button"] - LinearLayout >2 [text="Suggested video" || text="推荐视频"][visibleToUser=true]',
            '[vid="engagement_close_button"][visibleToUser=true]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/22757392', // 英文界面
            'https://i.gkd.li/i/22762876', // 中文界面
            'https://i.gkd.li/i/22757397',
          ],
        },
      ],
    },
    {
      key: 8,
      name: '局部广告',
      rules: [
        {
          fastQuery: true,
          activityIds:
            'com.google.android.apps.youtube.app.watchwhile.MainActivity',
          matches:
            '@ImageView[clickable=true][width<100 && height<100] <<n [vid="panel_header"]',
          snapshotUrls: 'https://i.gkd.li/i/23787178',
        },
      ],
    },
    {
      key: 9,
      name: '分段广告-播放页广告',
      rules: [
        {
          key: 1,
          fastQuery: true,
          activityIds:
            'com.google.android.apps.youtube.app.watchwhile.MainActivity',
          matches:
            '@[vid="overflow_button"][clickable=true] <<n [vid="collapsible_ad_cta_overlay_container"]',
          snapshotUrls: 'https://i.gkd.li/i/23790199',
        },
        {
          key: 2,
          preKeys: [1],
          fastQuery: true,
          activityIds:
            'com.google.android.apps.youtube.app.watchwhile.MainActivity',
          matches: '@[clickable=true] > [text="关闭"]',
          snapshotUrls: 'https://i.gkd.li/i/23772979',
        },
      ],
    },
  ],
});
