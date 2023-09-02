import type { AppConfig } from '../types';

export default <AppConfig>{
  id: 'com.qidian.QDReader',
  name: `起点读书`,
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.qidian.QDReader.ui.activity.SplashADActivity',
      rules: 'Button[text^=`跳过`]',
    },
  ],
};
