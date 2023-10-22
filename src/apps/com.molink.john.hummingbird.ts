import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.molink.john.hummingbird',
  name: 'bebird',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      activityIds: 'com.molink.john.hummingbird.activity.WellComeActivity',
      rules: '[id="com.molink.john.hummingbird:id/rl_timer"]',
      snapshotUrls: 'https://i.gkd.li/import/12867595',
    },
  ],
});
