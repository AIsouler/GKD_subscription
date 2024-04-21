import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.xinhang.mobileclient',
  name: '中国移动河南',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      activityIds: 'com.xinhang.mobileclient.home.activity.HomeActivity',
      rules: [
        {
          key: 0,
          matches: 'View[desc^="close"]',
          snapshotUrls: 'https://i.gkd.li/i/13024867',
        },
        {
          key: 1,
          matches: 'View > View > TextView + TextView[text=""]',
          snapshotUrls: 'https://i.gkd.li/i/13024869',
        },
      ],
    },
    {
      key: 2,
      name: '局部广告-右侧悬浮广告',
      activityIds: 'com.xinhang.mobileclient.home.activity.HomeActivity',
      rules:
        '@[id="com.xinhang.mobileclient:id/iv_close"] + [id="com.xinhang.mobileclient:id/iv_advert"]',
      snapshotUrls: [
        'https://i.gkd.li/i/13024863',
        'https://i.gkd.li/i/13024872',
      ],
    },
  ],
});
