import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.onethingcloud.android',
  name: '网心云',
  groups: [
    {
      key: 1,
      name: '广告弹窗',
      activityIds: 'com.onethingcloud.android.MainActivity',
      rules:
        'FrameLayout >8 View > ImageView + ImageView + ImageView[clickable=true]',
      snapshotUrls: 'https://i.gkd.li/import/12841171',
    },
  ],
});
