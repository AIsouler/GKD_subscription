import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.nursinghome.monitor',
  name: '看护家',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      rules: [
        {
          key: 1,
          fastQuery: true,
          matchTime: 10000,
          actionMaximum: 1,
          resetMatch: 'app',
          activityIds: '.ui.activity.MainActivity',
          matches:
            'ImageView[childCount=0][text=null] < @ViewGroup[clickable=true][childCount=1] < ViewGroup <6 ViewGroup + ViewGroup >3 [text="广告"]',
          exampleUrls: 'https://e.gkd.li/12316698-b92f-4a78-be55-5d9a90700f4a',
          snapshotUrls: 'https://i.gkd.li/i/17504953',
        },
        {
          key: 2,
          fastQuery: true,
          activityIds: 'com.baidu.mobads.sdk.api.MobRewardVideoActivity',
          matches:
            '@ImageView[clickable=true][childCount=0] + RelativeLayout >2 [text="反馈"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/24979384',
        },
        {
          key: 3,
          fastQuery: true,
          activityIds: 'com.ja.adx.qiming.ad.activity.InterstitialActivity',
          matches: '[vid="qiming_widget_iv_close"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/24979391',
        },
      ],
    },
  ],
});
