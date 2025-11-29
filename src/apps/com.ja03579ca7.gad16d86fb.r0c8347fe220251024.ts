import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.ja03579ca7.gad16d86fb.r0c8347fe220251024',
  name: '瓜子影视 v3.0.3.4',
  groups: [
    {
      key: 3,
      name: '全屏广告-弹窗广告',
      activityIds: ['com.e0caf8d3b1.kb2d4628f1.activity.ad.AdActivity'],
      rules: [
              {
          matches: '[text*="跳过"]',
          snapshotUrls: [
            'https://i.gkd.li/i/23833283',
          ],
        },
      ],
    },
        {
      key: 4,
      name: '局部广告-卡片广告',
      activityIds: ['com.e0caf8d3b1.kb2d4628f1.activity.homepage.HomepageActivity'],
      rules: [
        {
          matches: '[id$="iv_close_home_dialog"]',
          snapshotUrls: [
            'https://i.gkd.li/i/23833240',
          ],
        },
      ],
    },
  ],
});
