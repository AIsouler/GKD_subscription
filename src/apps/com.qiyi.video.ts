import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.qiyi.video',
  name: '爱奇艺',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          // 需点击 clickable=true 的节点 https://github.com/AIsouler/GKD_subscription/issues/613
          matches: '@[clickable=true] >(1,2) [text="关闭"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13160866',
            'https://i.gkd.li/i/13379565',
            'https://i.gkd.li/i/18135566',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '局部广告-顶部卡片广告',
      fastQuery: true,
      rules: [
        {
          activityIds: [
            'org.qiyi.android.video.MainActivity',
            'org.qiyi.video.PhoneCloudRecordActivity',
            '.qysplashscreen.hotlaunch.HotSplashScreenActivity',
          ],
          anyMatches: [
            '@[vid="unused_res_a"][clickable=true] > [vid="close"][visibleToUser=true]',
            '@[vid="unused_res_a"][clickable=true] - [text="广告"][visibleToUser=true]',
          ],
          exampleUrls: 'https://e.gkd.li/69dd60a4-3038-4a8c-8501-33a2d36b3283',
          snapshotUrls: [
            'https://i.gkd.li/i/12495050',
            'https://i.gkd.li/i/16301287',
            'https://i.gkd.li/i/24312658',
            'https://i.gkd.li/i/24314237',
            'https://i.gkd.li/i/24364968',
          ],
          excludeSnapshotUrls: 'https://i.gkd.li/i/24324750',
        },
      ],
    },
    {
      key: 3,
      name: '权限提示-通知权限',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'org.qiyi.android.video.MainActivity',
          matches: '[id="com.qiyi.video:id/cancel_btn"][text="暂时不要"]',
          snapshotUrls: 'https://i.gkd.li/i/12838152',
        },
      ],
    },
    {
      key: 4,
      name: '更新提示',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: [
            'org.qiyi.android.video.MainActivity',
            'org.qiyi.android.search.view.PhoneSearchActivity',
            '.qysplashscreen.hotlaunch.HotSplashScreenActivity',
          ],
          matches: '[text="暂不升级"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/12838158',
            'https://i.gkd.li/i/13684912',
            'https://i.gkd.li/i/19049372',
          ],
        },
      ],
    },
    {
      key: 5,
      name: '全屏广告-播放页-插入广告',
      desc: '视频播放前或播放中途插入的广告',
      rules: [
        {
          key: 1,
          fastQuery: true,
          activityIds: 'org.iqiyi.video.activity.PlayerActivity',
          matches: '@[clickable=true] > [text^="关闭广告"]',
          exampleUrls: 'https://e.gkd.li/04622996-5a6d-4577-a1cb-adcae37f62b6',
          snapshotUrls: 'https://i.gkd.li/i/18134230',
        },
        {
          key: 2,
          fastQuery: true,
          activityIds: 'org.iqiyi.video.activity.PlayerActivity',
          matches: '[vid="btn_ads_img_pause_close"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/2cc7688b-f802-4ebe-9eb6-6b9bc6ed5633',
          snapshotUrls: 'https://i.gkd.li/i/18135562',
        },
      ],
    },
  ],
});
