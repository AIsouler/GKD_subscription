import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.tencent.zebra',
  name: '水印相机',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.android.camera.splash.SplashActivity',
      matchLauncher: true,
      quickFind: true,
      rules: '[id="com.tencent.zebra:id/splash_container"] + [text="跳过"]',
      snapshotUrls: 'https://gkd-kit.songe.li/import/12893521',
    },
  ],
});
