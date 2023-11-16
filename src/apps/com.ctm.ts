import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.ctm',
  name: 'CTM Buddy',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      quickFind: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[id="com.ctm:id/tv_skip_adv"]',
      snapshotUrls: 'https://i.gkd.li/import/13350472',
    },
    {
      key: 1,
      name: '浮窗广告',
      quickFind: true,
      activityIds: 'com.ctm.home.page.MainActivity',
      rules: '[id="com.ctm:id/iv_close"]',
      snapshotUrls: 'https://i.gkd.li/import/13350575',
    },
    {
      key: 2,
      name: '底部横幅广告',
      quickFind: true,
      activityIds: 'com.ctm.home.page.MainActivity',
      rules: '[id="com.ctm:id/btn_close"]',
      snapshotUrls: 'https://i.gkd.li/import/13350612',
    },
  ],
});
