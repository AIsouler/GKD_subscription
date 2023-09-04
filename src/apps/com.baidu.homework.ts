import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.baidu.homework',
  name: '作业帮',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.baidu.homework.activity.init.InitActivity',
      rules: '[id=`com.baidu.homework:id/adx_splash_skip_text`]',
    },
  ],
});
