import type { AppConfig } from '../types';

export default <AppConfig>{
  id: 'com.tencent.mtt',
  groups: [
    {
      key: 0,
      name: 'QQ浏览器-开屏广告',
      activityIds: 'com.tencent.mtt.MainActivity',
      rules: [
        '@View[id=null] + ImageView + FrameLayout TextView[text=`向上滑动或点击查看`]',

        // https://gkd-kit.gitee.io/import/38517192/7d8e9661-c29a-4448-94c2-d7b0a1756107
        `@LinearLayout[clickable=true] > TextView[text="跳过"]`,
      ],
    },
  ],
};
