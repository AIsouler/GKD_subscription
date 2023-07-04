import type { AppConfig } from '../types';

export default <AppConfig>{
  id: 'com.tencent.qt.sns',
  groups: [
    {
      key: 0,
      name: '掌上穿越火线-开屏广告',
      activityIds: 'com.tencent.gamehelper.ui.main.WelcomeActivity',
      rules: '[id=`com.tencent.qt.sns:id/tv_timer`][text$=`跳过`]',
    },
  ],
};
