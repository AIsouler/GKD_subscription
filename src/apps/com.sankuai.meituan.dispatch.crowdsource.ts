import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.sankuai.meituan.dispatch.crowdsource',
  name: '美团众包',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      rules: [
        {
          key: 0,
          quickFind: true,
          activityIds: [
            'com.meituan.banma.main.activity.MainActivity',
            'com.meituan.banma.main.activity.ImageAdActivity',
          ],
          matches: '[vid="image_ad_close"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13694935',
            'https://i.gkd.li/i/14818737',
          ],
        },
      ],
    },
  ],
});
