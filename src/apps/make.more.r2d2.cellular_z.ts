import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'make.more.r2d2.cellular_z',
  name: 'Cellular-Z',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      activityIds: 'make.more.r2d2.cellular_z.activity.SplashGMActivity',
      rules: [
        {
          matches: '[text^="跳过"]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12648511',
        },
        {
          matches: '[id="com.byted.pangle:id/tt_splash_skip_btn"]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12747314',
        },
      ],
    },
  ],
});
