import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.ctm',
  name: 'CTM Buddy',
  deprecatedKeys: [0],
  groups: [
    {
      key: 1,
      name: '局部广告-浮窗广告',
      quickFind: true,
      activityIds: 'com.ctm.home.page.MainActivity',
      rules: '[id="com.ctm:id/iv_close"]',
      snapshotUrls: 'https://i.gkd.li/i/13350575',
    },
    {
      key: 2,
      name: '局部广告-底部横幅广告',
      quickFind: true,
      activityIds: 'com.ctm.home.page.MainActivity',
      rules: '[id="com.ctm:id/btn_close"]',
      snapshotUrls: 'https://i.gkd.li/i/13350612',
    },
  ],
});
