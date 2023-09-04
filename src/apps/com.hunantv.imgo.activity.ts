import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.hunantv.imgo.activity',
  name: '芒果TV',
  groups: [
    {
      key: -1,
      name: '开屏广告',
      activityIds: 'com.hunantv.imgo.activity.MainActivity',
      rules: [
        {
          matches: '[id="com.hunantv.imgo.activity:id/layout_boot_skip"]',
          snapshotUrls:
            'https://gkd-kit.gitee.io/import/38517192/7202bd0a-a5c6-4ec4-9547-bf4ca6d372d0',
        },
        {
          matches: 'TextView[text!=null] - [text^="跳过"]',
          snapshotUrls:
            'https://gkd-kit.gitee.io/import/38517192/7202bd0a-a5c6-4ec4-9547-bf4ca6d372d0',
        },
      ],
    },
    {
      key: 0,
      name: '关闭青少年模式提示',
      activityIds: [
        'com.hunantv.imgo.activity.MainActivity',
        'miuix.appcompat.app.m',
      ],
      rules: '[id=`com.hunantv.imgo.activity:id/btnIknow`]',
    },
    {
      key: 1,
      name: '首页推荐流-卡片广告',
      activityIds: 'com.hunantv.imgo.activity.MainActivity',
      rules: [
        {
          matches: '[id="com.hunantv.imgo.activity:id/close_ad"]',
          snapshotUrls:
            'https://gkd-kit.gitee.io/import/38517192/40fb71ad-01a5-4420-9150-88172ff8a3bf',
        },
        {
          matches:
            '@[id="com.hunantv.imgo.activity:id/layout_logo"] > [id="com.hunantv.imgo.activity:id/tv_ad_logo"]',
          snapshotUrls:
            'https://gkd-kit.gitee.io/import/38517192/b74150b5-8e9f-4cbb-86a7-722fc739a1b8',
        },
      ],
    },
  ],
});
