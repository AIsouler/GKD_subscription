import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.shanghaigm.android.mycadillac',
  name: 'MyCadillac',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds:
        'com.shanghaigm.android.mycadillac.account.ui.LoginAnimationActivity',
      rules:
        '[id="com.shanghaigm.android.mycadillac:id/tv_close"][text="跳过"]',
      snapshotUrls: 'https://gkd-kit.songe.li/import/12918198',
    },
  ],
});
