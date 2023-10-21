import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.mfcloudcalculate.networkdisk',
  name: '123云盘',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.mfcloudcalculate.networkdisk.activity.SplashActivity',
      matchLauncher: true,
      rules: [
        {
          key: 0,
          matches:
            '[id="com.mfcloudcalculate.networkdisk:id/frame_ad_splash_container"] >n [text^="跳过"][text.length<=4]',
          snapshotUrls: [
            'https://gkd-kit.songe.li/import/12846434',
            'https://gkd-kit.songe.li/import/13059834',
          ],
        },
      ],
    },
  ],
});
