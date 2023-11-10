import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.shunwang.weihuyun',
  name: '维护云',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: ['com.shunwang.maintaincloud.welcome.SplashActivity'],
      rules: [
        {
          matches: '[id="com.shunwang.weihuyun:id/tv_jump"]',
          snapshotUrls: ['https://i.gkd.li/import/12903874'],
        },
      ],
    },
  ],
});
