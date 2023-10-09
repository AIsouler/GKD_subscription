import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.bbk.appstore',
  name: 'vivo应用商店',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      activityIds: ['com.bbk.appstore.ui.AppStore'],
      rules:
        '[id="com.bbk.appstore:id/launch_activity_root_layout"] >6 [text^="跳过"]',
      snapshotUrls: 'https://gkd-kit.songe.li/import/12847395',
    },
  ],
});
