import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.samsung.android.voc',
  name: '盖乐世社区',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds:
        'com.samsung.android.voc.app.initialize.datainitialize.InitializeActivity',
      rules: '[id="com.samsung.android.voc:id/skip_ad_text_view"]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/12708061',
    },
  ],
});
