import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.kuaitong.driver',
  name: '快通驾考',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'io.dcloud.PandoraEntry',

      rules: [
        {
          key: 0,
          matches: '[id="com.kuaitong.driver:id/ksad_splash_circle_skip_view"]',
          snapshotUrls: 'https://i.gkd.li/import/13059956',
        },
        {
          key: 1,
          matches:
            '[id="com.kuaitong.driver:id/ad_dcloud_splash_container"] >n [text="跳过"]',
          snapshotUrls: 'https://i.gkd.li/import/13059954',
        },
      ],
    },
  ],
});
