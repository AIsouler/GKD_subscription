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
    {
      key: 1,
      name: `芒果TV-首页推荐流-卡片广告`,
      activityIds: `com.hunantv.imgo.activity.MainActivity`,
      // https://gkd-kit.gitee.io/import/38517192/b74150b5-8e9f-4cbb-86a7-722fc739a1b8
      rules: `@[id="com.hunantv.imgo.activity:id/layout_logo"] > [id="com.hunantv.imgo.activity:id/tv_ad_logo"]`,
    },
  ],
};
