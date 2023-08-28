import type { AppConfig } from '../types';

export default <AppConfig>{
  id: 'com.hunantv.imgo.activity',
  groups: [
    {
      key: -1,
      name: `芒果TV`,
      // https://gkd-kit.gitee.io/import/38517192/0d54f18a-eb7a-498d-a458-32980190042b
      rules: `[id="com.hunantv.imgo.activity:id/layout_boot_skip"]`,
    },
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
