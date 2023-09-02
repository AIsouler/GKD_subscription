import type { AppConfig } from '../types';

export default <AppConfig>{
  id: 'com.tencent.qqlive',
  name: `腾讯视频`,
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.tencent.qqlive.ona.activity.SplashHomeActivity',
      rules: [
        'TextView[text*=`互动广告`] < LinearLayout < FrameLayout + FrameLayout > TextView[text=`跳过`]',
        'TextView[text=`广告`] LinearLayout + TextView[text=`跳过`]',
      ],
    },
    {
      key: 1,
      name: '关闭青少年弹窗',
      activityIds:
        'com.tencent.qqlive.ona.update.trunk.client.TrunkUpdateActivity',
      rules:
        'TextView[text*=`青少年模式`] +n TextView[id=`com.tencent.qqlive:id/arg`][text=`我知道了`]',
    },
  ],
};
