import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.hyww.wisdomtree',
  name: '智慧树',
  groups: [
    {
      key: 1,
      name: '全屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          name: '百度广告',
          fastQuery: true,
          activityIds: 'com.baidu.mobads.sdk.api.MobRewardVideoActivity',
          matches:
            '@ImageView[clickable=true][childCount=0] + RelativeLayout >(1,2) [text="反馈"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13799876',
            'https://i.gkd.li/i/13852024',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '局部广告',
      rules: [
        {
          key: 0,
          name: '信息流广告',
          fastQuery: true,
          matches: '@[vid="rl_down"] <<n [vid="tt_ad_content"]',
          snapshotUrls: 'https://i.gkd.li/i/13852023',
        },
      ],
    },
  ],
});
