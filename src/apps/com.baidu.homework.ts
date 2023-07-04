import type { AppConfig } from '../types';

export default <AppConfig>{
  id: 'com.baidu.homework',
  groups: [
    {
      key: 0,
      name: '作业帮-开屏广告',
      activityIds: 'com.baidu.homework.activity.init.InitActivity',
      rules: '[id=`com.baidu.homework:id/adx_splash_skip_text`]',
    },
  ],
};
