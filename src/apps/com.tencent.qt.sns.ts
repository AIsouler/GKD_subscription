import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.tencent.qt.sns',
  name: '掌上穿越火线',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.tencent.gamehelper.ui.main.WelcomeActivity',
      rules: '[id=`com.tencent.qt.sns:id/tv_timer`][text$=`跳过`]',
    },
  ],
});
