import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.qihoo.camera',
  name: '360摄像机',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.qihoo.jia.ui.activity.SplashActivity',
      matchLauncher: true,
      quickFind: true,
      rules: '[text="跳过"]',
      snapshotUrls: 'https://gkd-kit.songe.li/import/12846783',
    },
  ],
});
