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
          matches: '@LinearLayout > [text="关闭"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13160866',
            'https://i.gkd.li/i/13379565',
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
          ],
          matches: '[id="com.qiyi.video:id/cancel_btn"][text="暂不升级"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12838158',
            'https://i.gkd.li/i/13684912',
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
          activityIds: 'org.iqiyi.video.activity.PlayerActivity',
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
