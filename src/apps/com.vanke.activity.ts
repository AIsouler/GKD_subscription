import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.vanke.activity',
  name: '住这儿',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      activityIds: 'com.vanke.activity.module.common.SplashNewAct',
      rules: 'Button[text^="跳过"]',
      snapshotUrls: 'https://i.gkd.li/import/12917007',
    },
  ],
});
