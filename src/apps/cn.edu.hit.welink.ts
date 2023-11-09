import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'cn.edu.hit.welink',
  name: '哈工大APP',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      activityIds: ['huawei.w3.ui.welcome.W3SplashScreenActivity'],
      rules: [
        {
          matches: '[id="cn.edu.hit.welink:id/skip_button"]',
          snapshotUrls: 'https://i.gkd.li/import/import/12710980',
        },
      ],
    },
  ],
});
