import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.lstech.rehealth',
  name: '派健康',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.lstech.rehealth.splash.SplashActivity',
      rules:
        '[id="com.lstech.rehealth:id/ksad_splash_root_container"] [text="跳过"]',
      snapshotUrls: 'https://i.gkd.li/import/12830071',
    },
  ],
});
