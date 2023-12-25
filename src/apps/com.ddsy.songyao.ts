import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.ddsy.songyao',
  name: '叮当快药',
  groups: [
    {
      key: 0,
      name: '开屏广告',

      quickFind: true,
      activityIds: 'com.ddsy.songyao.activity.SplashActivity',
      rules: [
        {
          matches: '[id="com.ddsy.songyao:id/time"][text*="跳过"]',
          snapshotUrls: 'https://i.gkd.li/import/13048719',
        },
      ],
    },
    {
      key: 1,
      name: '优惠卷提示',
      quickFind: true,
      activityIds: 'com.ddsy.songyao.activity.SplashActivity',
      rules: [
        {
          matches:
            '[id="com.ddsy.songyao:id/iv_coupon_bottom"] + [id="com.ddsy.songyao:id/iv_close"]',
          snapshotUrls: 'https://i.gkd.li/import/13048720',
        },
      ],
    },
  ],
});
