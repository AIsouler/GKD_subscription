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
          activityIds: 'com.meituan.banma.main.activity.MainActivity',
          quickFind: true,
          matches:
            '[id="com.sankuai.meituan.dispatch.crowdsource:id/image_ad_close"]',
          snapshotUrls: 'https://i.gkd.li/import/13694935',
        },
      ],
    },
  ],
});
