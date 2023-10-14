import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.android.mediacenter',
  name: '华为音乐',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.android.mediacenter.PageActivity',
      matchLauncher: true,
      quickFind: true,
      rules: '[id="com.huawei.hms.ads.uiengine:id/hiad_skip_text"]',
      snapshotUrls: 'https://gkd-kit.songe.li/import/12901417',
    },
  ],
});
