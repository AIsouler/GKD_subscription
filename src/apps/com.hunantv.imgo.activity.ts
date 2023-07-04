import type { AppConfig } from '../types';

export default <AppConfig>{
  id: 'com.hunantv.imgo.activity',
  groups: [
    {
      key: 0,
      name: '芒果TV-关闭青少年模式提示',
      activityIds: [
        'com.hunantv.imgo.activity.MainActivity',
        'miuix.appcompat.app.m',
      ],
      rules: '[id=`com.hunantv.imgo.activity:id/btnIknow`]',
    },
  ],
};
