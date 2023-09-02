import type { AppConfig } from '../types';

export default <AppConfig>{
  id: 'com.xiaomi.shop',
  name: `小米商城`,
  groups: [
    {
      key: 0,
      name: `开屏广告`,
      activityIds: `com.xiaomi.shop.activity.MainTabActivity`,
      rules: `[id="com.xiaomi.shop:id/skip"]`,
      snapshotUrls: [
        `https://gkd-kit.gitee.io/import/38517192/9083b291-43f8-4d92-a506-a9dc6ed0156f`,
      ],
    },
  ],
};
