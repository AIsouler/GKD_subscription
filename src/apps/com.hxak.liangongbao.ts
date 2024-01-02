import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.hxak.liangongbao',
  name: '链工宝',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[id=`com.hxak.liangongbao:id/time_down`]',
    },
  ],
});
