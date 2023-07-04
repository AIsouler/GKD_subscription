import type { AppConfig } from '../types';

export default <AppConfig>{
  id: 'com.hxak.liangongbao',
  groups: [
    {
      key: 0,
      name: '链工宝-开屏广告',
      activityIds: 'com.hxak.liangongbao.login.ui.HomeActivity',
      rules: '[id=`com.hxak.liangongbao:id/time_down`]',
    },
  ],
};
