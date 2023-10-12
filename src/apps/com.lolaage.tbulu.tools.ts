import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.lolaage.tbulu.tools',
  name: '两步路户外助手',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.lolaage.tbulu.tools.ui.activity.WelcomeActivity',
      matchLauncher: true,
      quickFind: true,
      rules: '[id="com.lolaage.tbulu.tools:id/skipPart"]',
      snapshotUrls: 'https://gkd-kit.songe.li/import/12882538',
    },
    {
      key: 1,
      name: '更新弹窗',
      activityIds: 'com.lolaage.tbulu.tools.upgrade',
      rules:
        '[id="com.lolaage.tbulu.tools:id/tvFullUpgrade"] + [id="com.lolaage.tbulu.tools:id/tvCancel"]',
      snapshotUrls: 'https://gkd-kit.songe.li/import/12882550',
    },
  ],
});
