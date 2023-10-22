import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.huawei.lives',
  name: '华为生活服务',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.huawei.lives.ui.SplashADActivity',
      matchLauncher: true,
      rules: '[id="com.huawei.lives:id/hiad_skip_text"]',
      snapshotUrls: 'https://i.gkd.li/import/13063001',
    },
  ],
});
