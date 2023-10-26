import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.tmall.wireless',
  name: '手机天猫',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      matchLauncher: true,
      activityIds: 'com.tmall.wireless.maintab.module.TMMainTabActivity',
      rules: '[id="com.tmall.wireless:id/splash_ad_txt_skip"]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/13162604',
    },
    {
      key: 1,
      name: '版本更新',
      quickFind: true,
      activityIds: 'com.tmall.wireless.splash.TMSplashActivity',
      rules: '[id="com.tmall.wireless:id/update_button_cancel"] [text="取消"]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/13162603',
    },
  ],
});
