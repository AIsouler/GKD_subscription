import type { AppConfig } from '../types';

export default <AppConfig>{
  id: 'com.mihoyo.hyperion',
  name: `米游社`,
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: [
        'com.mihoyo.hyperion.ui.SplashActivity',
        `com.mihoyo.hyperion.splash.SplashActivity`,
      ],
      rules: '[id=`com.mihoyo.hyperion:id/mSplashBtJump`]',
      snapshotUrls: `https://gkd-kit.gitee.io/import/12482738`,
    },
    {
      key: 1,
      name: '青少年模式',
      desc: '关闭青少年模式提醒弹窗',
      rules: 'TextView[id=`com.mihoyo.hyperion:id/tv_dialog_i_know`]',
    },
  ],
};
