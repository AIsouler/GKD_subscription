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
    {
      key: 1,
      name: '通知提醒',
      quickFind: true,
      actionMaximum: 1,
      activityIds: 'com.jd.jrapp.bm.mainbox.main.MainActivity',
      rules: 'TextView[text^="打开通知"] +2 [id="com.jd.jrapp:id/iv_close"]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/13249998',
    },
  ],
});
