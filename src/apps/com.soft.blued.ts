import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.soft.blued',
  name: 'Blued',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.blued.android.core.ui.TerminalActivity',
      rules: '[id="com.soft.blued:id/fl_ad_content"] >n [text="跳过"]',
      snapshotUrls: 'https://gkd-kit.songe.li/import/12777070',
    },
    {
      key: 1,
      name: '交友页面-广告卡片',
      activityIds: 'com.blued.android.core.ui.TerminalActivity',
      rules:
        '[id="com.soft.blued:id/ad_container"] >n [id="com.soft.blued:id/img_close"]',
      snapshotUrls: 'https://gkd-kit.songe.li/import/12777097',
    },
  ],
});
