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
      rules: '@LinearLayout > [text="关闭"]',
      snapshotUrls: [
        'https://i.gkd.li/i/13160866',
        'https://i.gkd.li/i/13379565',
      ],
    },
    {
      key: 1,
      name: '青少年模式',
      fastQuery: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches: '[id="com.qiyi.video:id/confirm_btn"][text="我知道了"]',
          exampleUrls:
            'https://m.gkd.li/6328439/d69e92f8-8304-4296-909a-11730e408a16',
          snapshotUrls: 'https://i.gkd.li/i/13546555',
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
          ],
          matches: '@[vid="unused_res_a"][clickable=true] > [vid="close"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12495050',
            'https://i.gkd.li/i/16301287',
          ],
        },
      ],
    },
    {
      key: 3,
      name: '权限提示-通知权限',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      snapshotUrls: 'https://i.gkd.li/i/12838152',
      rules: '[id="com.qiyi.video:id/cancel_btn"][text="暂时不要"]',
    },
    {
      key: 4,
      name: '更新提示',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[id="com.qiyi.video:id/cancel_btn"][text="暂不升级"]',
      snapshotUrls: [
        'https://i.gkd.li/i/12838158',
        'https://i.gkd.li/i/13684912', //activityIds: 'org.qiyi.android.search.view.PhoneSearchActivity',
      ],
    },
    {
      key: 5,
      name: '全屏广告-播放页-插入广告',
      desc: '视频播放前或播放中途插入的广告。默认关闭。',
      activityIds: 'org.iqiyi.video.activity.PlayerActivity',
      rules: [
        {
          matches:
            '@RelativeLayout[id="com.qiyi.video:id/unused_res_a"] > TextView[text="关闭广告"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13536669',
            'https://i.gkd.li/i/13536703',
          ],
        },
      ],
    },
  ],
});
