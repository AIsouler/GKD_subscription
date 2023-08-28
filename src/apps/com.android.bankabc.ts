import type { AppConfig } from '../types';

export default <AppConfig>{
  id: 'com.android.bankabc',
  groups: [
    {
      key: 0,
      name: `中国农业银行-开屏广告`,
      activityIds: `com.alipay.mobile.quinox.LauncherActivity`,
      rules: [
        // https://gkd-kit.gitee.io/import/38517192/3653218a-e0e0-4a60-8308-dea5fd4179b3
        `ImageView[id="com.android.bankabc:id/close"]`,
      ],
    },
  ],
};
