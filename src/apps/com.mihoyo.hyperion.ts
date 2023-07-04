import type { AppConfig } from '../types';

export default <AppConfig>{
  id: 'com.mihoyo.hyperion',
  groups: [
    {
      key: 0,
      name: '米游社-开屏广告',
      activityIds: 'com.mihoyo.hyperion.ui.SplashActivity',
      rules: '[id=`com.mihoyo.hyperion:id/mSplashBtJump`]',
    },
    {
      key: 1,
      name: '米游社-青少年模式',
      desc: '关闭青少年模式提醒弹窗',
      rules: 'TextView[id=`com.mihoyo.hyperion:id/tv_dialog_i_know`]',
    },
  ],
};
