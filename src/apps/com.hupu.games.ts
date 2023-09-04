import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.hupu.games',
  name: '虎扑',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.hupu.games.main.MainActivity',
      rules: '[id="com.byted.pangle:id/tt_splash_skip_btn"]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/12509060',
    },
  ],
});
