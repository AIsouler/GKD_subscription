import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.didapinche.booking',
  name: '嘀嗒出行',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchLauncher: true,
      quickFind: true,
      activityIds: 'com.didapinche.booking.home.activity.StartActivity',
      rules: [
        {
          matches: '[id="com.byted.pangle:id/tt_splash_skip_btn"]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/13051862',
        },
        {
          matches: '[id="com.didapinche.booking:id/tv_full_skip"]',
          snapshotUrls: [
            'https://gkd-kit.gitee.io/import/13051805',
            'https://gkd-kit.gitee.io/import/13051792',
          ],
        },
      ],
    },
  ],
});
