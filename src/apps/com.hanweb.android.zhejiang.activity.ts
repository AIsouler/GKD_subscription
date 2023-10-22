import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.hanweb.android.zhejiang.activity',
  name: '浙里办',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds:
        'com.alibaba.gov.android.welcome.activity.DefaultWelcomeActivity',
      rules:
        '[id="com.hanweb.android.zhejiang.activity:id/gov_splash_tv_count_down"][text ^= "跳过"]',
      snapshotUrls: 'https://i.gkd.li/import/12913138',
    },
  ],
});
