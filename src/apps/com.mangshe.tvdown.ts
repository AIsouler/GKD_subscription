import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.mangshe.tvdown',
  name: '蟒蛇下载',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.mangshe.tvdown.ad.chuanshanjia.SplashActivity_csj',
      rules: [
        {
          matches: '[id="com.mangshe.tvdown:id/skip_view2"]',
          snapshotUrls: 'https://i.gkd.li/import/12854596',
        },
      ],
    },
  ],
});
