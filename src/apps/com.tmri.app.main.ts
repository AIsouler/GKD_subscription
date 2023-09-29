import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.tmri.app.main',
  name: '交管12123',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.tmri.app.ui.activity.main.TmriNewActivity',
      rules: '[id="com.tmri.app.main:id/tv_timer"][text^="跳过"]',
      snapshotUrls: 'https://gkd-kit.songe.li/import/12767813',
    },
  ],
});
