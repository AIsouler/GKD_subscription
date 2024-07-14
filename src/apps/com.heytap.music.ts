import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.heytap.music',
  name: '音乐',
  groups: [
    {
      key: 1,
      name: '更新提示',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches: '@ImageView[clickable=true] + [text="检测到新版本"]',
          snapshotUrls: 'https://i.gkd.li/i/14987173',
        },
      ],
    },
    {
      key: 2,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.allsaints.ad.sjy.reward.SRewardLoadingActivity',
          matches: '@[vid="close"] - [text="看广告免费听 VIP 歌曲"]',
          snapshotUrls: 'https://i.gkd.li/i/16200623',
        },
      ],
    },
  ],
});
