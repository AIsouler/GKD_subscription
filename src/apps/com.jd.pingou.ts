import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.jd.pingou',
  name: '京喜',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: [
        'com.jd.jdlite.ad.ADActivity',
        'com.jd.jdlite.MainActivity',
      ],
      matchLauncher: true,
      rules: '[desc="闪屏广告"] + [text$="跳过"]',
      snapshotUrls: [
        'https://i.gkd.li/import/12727342',
        'https://i.gkd.li/import/13062974',
      ],
    },
  ],
});
