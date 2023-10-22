import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.picooc',
  name: 'PICOOC',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.picooc.activity.start.WelcomeActivity',
      rules: 'TextView[text = "广告"] <2 ViewGroup - ViewGroup [text = "跳过"]',
      snapshotUrls: 'https://i.gkd.li/import/12859002',
    },
  ],
});
