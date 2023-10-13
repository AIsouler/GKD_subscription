import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.mt.mtxx.mtxx',
  name: '美图秀秀',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.meitu.business.ads.core.activity.AdActivity',
      rules: '[text=`跳过广告`]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/12472627',
    },
  ],
});
