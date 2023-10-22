import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.android36kr.app',
  name: '36氪',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      activityIds: 'com.android36kr.app.ui.LogoActivity',
      rules: '[id="com.android36kr.app:id/tv_skip"]',
      snapshotUrls: 'https://i.gkd.li/import/12774811',
    },
  ],
});
