import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.qidian.QDReader',
  name: `起点读书`,
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: [
        'com.qidian.QDReader.ui.activity.SplashADActivity',
        'com.qidian.QDReader.ui.activity.SplashImageActivity',
      ],
      rules: 'Button[text^=`跳过`]',
      snapshotUrls: ['https://gkd-kit.gitee.io/import/12508836'],
    },
  ],
});
