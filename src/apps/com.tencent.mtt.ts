import type { AppConfig } from '../types';

export default <AppConfig>{
  id: 'com.tencent.mtt',
  groups: [
    {
      key: 0,
      name: 'QQ浏览器-开屏广告',
      activityIds: 'com.tencent.mtt.MainActivity',
      rules:
        '@View[id=null] + ImageView + FrameLayout TextView[text=`向上滑动或点击查看`]',
    },
  ],
};
