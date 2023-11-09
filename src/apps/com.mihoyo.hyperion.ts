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
        'https://i.gkd.li/import/import/12482738',
        'https://i.gkd.li/import/import/12675530', // activityId: 'com.miui.home.launcher.Launcher'
      ],
    },
    {
      key: 1,
      name: '青少年模式',
      desc: '关闭青少年模式提醒弹窗',
      activityIds: [
        'com.mihoyo.hyperion.main.HyperionMainActivity',
        'com.mihoyo.hyperion.splash.SplashActivity',
      ],
      rules:
        'TextView[id="com.mihoyo.hyperion:id/tv_dialog_go_to_teenage_mode"] + TextView[id="com.mihoyo.hyperion:id/tv_dialog_i_know"]',
      snapshotUrls: [
        'https://i.gkd.li/import/import/12675547',
        'https://i.gkd.li/import/12775850', // activityId: 'com.mihoyo.hyperion.splash.SplashActivity'
      ],
    },
    {
      key: 2,
      name: '版本更新提示',
      desc: '关闭版本更新提示弹窗',
      rules: 'TextView[id="com.mihoyo.hyperion:id/mUpgradeDialogCancel"]',
      snapshotUrls: 'https://i.gkd.li/import/import/12675513',
    },
    {
      key: 3,
      name: '自动打卡',
      desc: '点击顶部搜索框右侧[打卡],切换板块自动签到',
      activityIds: 'com.mihoyo.hyperion.main.HyperionMainActivity',
      rules:
        'TextView[id="com.mihoyo.hyperion:id/mTvText"][text="打卡"][visibleToUser=true]',
      snapshotUrls: [
        'https://i.gkd.li/import/import/12857503', // 未打卡
        'https://i.gkd.li/import/import/12859518', // 已打卡
      ],
    },
  ],
});
