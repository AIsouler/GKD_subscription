import type { AppConfig } from '../types';

export default <AppConfig>{
  id: 'com.mt.mtxx.mtxx',
  groups: [
    {
      key: 0,
      name: '美图秀秀-开屏广告',
      activityIds: 'com.meitu.business.ads.core.activity.AdActivity',
      // https://gkd-kit.gitee.io/import/38517192/1f56aa17-c290-4e56-b6fb-a94bc778448b
      rules: '[text=`跳过广告`]',
    },
  ],
};
