import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.jd.jrapp',
  name: '京东金融',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchLauncher: true,
      quickFind: true,
      activityIds: 'com.jd.jrapp.bm.mainbox.main.MainActivity',
      rules: [
        {
          matches: '[id="com.jd.jrapp:id/btn_jump"]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/13054174',
        },
      ],
    },
  ],
});
