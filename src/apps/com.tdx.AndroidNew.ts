import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.tdx.AndroidNew',
  name: '通达信',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.tdx.Android.TdxAndroidActivity',
      rules: '[id=null][text^="跳过"]',
      snapshotUrls: 'https://i.gkd.li/import/12774846',
    },
  ],
});
