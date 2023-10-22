import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.jingcai.apps.qualitydev',
  name: '到梦空间',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      activityIds: 'com.jingcai.apps.qualitydev.qualitync.SplashActivity',
      rules: [
        {
          matches: ['[id="com.jingcai.apps.qualitydev:id/tv_toapp"]'],
          snapshotUrls: 'https://i.gkd.li/import/12838092',
        },
      ],
    },
  ],
});
