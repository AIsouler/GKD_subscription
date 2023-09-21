import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.mihoyo.hyperion',
  name: '米游社',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: [
        'com.mihoyo.hyperion.ui.SplashActivity',
        'com.mihoyo.hyperion.splash.SplashActivity',
        'com.miui.home.launcher.Launcher',
      ],
      rules: '[id="com.mihoyo.hyperion:id/mSplashBtJump"]',
      snapshotUrls: [
        'https://gkd-kit.gitee.io/import/12482738',
        'https://gkd-kit.gitee.io/import/12675530', // activityId: 'com.miui.home.launcher.Launcher'
      ],
    },
    {
      key: 1,
      name: '青少年模式',
      desc: '关闭青少年模式提醒弹窗',
      activityIds: 'com.mihoyo.hyperion.main.HyperionMainActivity',
      rules:
        'TextView[id="com.mihoyo.hyperion:id/tv_dialog_go_to_teenage_mode"] + TextView[id="com.mihoyo.hyperion:id/tv_dialog_i_know"]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/12675547',
    },
    {
      key: 2,
      name: '版本更新提示',
      desc: '关闭版本更新提示弹窗',
      rules: 'TextView[id="com.mihoyo.hyperion:id/mUpgradeDialogCancel"]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/12675513',
    },
  ],
});
