import type { AppConfig } from '../types';

export default <AppConfig>{
  id: 'com.ximalaya.ting.android',
  groups: [
    {
      key: 0,
      name: `喜马拉雅-右侧浮动广告`,
      activityIds: `com.ximalaya.ting.android.host.activity.MainActivity`,
      // https://gkd-kit.gitee.io/import/38517192/45664dfb-b8e6-4bdb-b5bb-9852c7a86a2f
      rules: `[id="com.ximalaya.ting.android:id/main_ad_broadside_close_real"]`,
    },
  ],
};
