import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.lingan.seeyou',
  name: '美柚',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      activityIds: ['com.meetyou.crsdk.CROpenScreenNewActivity'],
      rules: [
        {
          matches: '[id="com.lingan.seeyou:id/rl_count_container"]',
          snapshotUrls: 'https://i.gkd.li/import/import/13065769',
        },
      ],
    },
  ],
});
