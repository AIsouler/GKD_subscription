import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.onethingcloud.android',
  name: '网心云',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[desc^="跳过"][desc.length<=10]',
      snapshotUrls: [
        'https://i.gkd.li/import/12841174',
        'https://i.gkd.li/import/13414384',
      ],
    },
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
