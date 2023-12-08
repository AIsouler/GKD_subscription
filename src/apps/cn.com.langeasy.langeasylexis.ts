import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'cn.com.langeasy.langeasylexis',
  name: '不背单词',
  groups: [
    {
      enable: false,
      key: 1,
      name: '自动签到',
      rules: [
        {
          activityIds: 'cn.com.langeasy.langeasylexis.activity.MainActivity',
          matches: '[id="cn.com.langeasy.langeasylexis:id/bb_checkin"]',
          snapshotUrls: 'https://i.gkd.li/import/13610321',
        },
      ],
    },
  ],
});
