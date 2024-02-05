import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.hunantv.imgo.activity',
  name: '芒果TV',
  groups: [
    {
      key: 0,
      name: '青少年模式',
      activityIds: [
        'com.hunantv.imgo.activity.MainActivity',
        'miuix.appcompat.app.m',
      ],
      rules:
        '[id="com.hunantv.imgo.activity:id/llSetAgeMode"] + [id="com.hunantv.imgo.activity:id/btnIknow"]',
      snapshotUrls: 'https://i.gkd.li/import/12832447',
    },
    {
      key: 1,
      name: '分段广告-首页推荐广告',
      activityIds: 'com.hunantv.imgo.activity.MainActivity',
      rules: [
        {
          key: 0,
          matches:
            '@[id="com.hunantv.imgo.activity:id/layout_logo"] > [id="com.hunantv.imgo.activity:id/tv_ad_logo"]',
          snapshotUrls: 'https://i.gkd.li/import/12472616',
        },
        {
          preKeys: 0,
          key: 1,
          matches: '[id="com.hunantv.imgo.activity:id/close_ad"]',
          snapshotUrls: 'https://i.gkd.li/import/12472615',
        },
      ],
    },
    {
      key: 2,
      name: '全屏广告-弹窗广告',
      rules: [
        {
          key: 0,
          activityIds: 'com.hunantv.imgo.activity.MainActivity',
          matches:
            '[id="com.hunantv.imgo.activity:id/imgPromotion"] + [id="com.hunantv.imgo.activity:id/vClosePromotionView"]',
          snapshotUrls: 'https://i.gkd.li/import/12818464',
        },
        {
          key: 1,
          activityIds: 'com.hunantv.imgo.activity.MainActivity',
          matches: '@TextView[id=null][text=""] - View > Image[id="hotGif"]',
          snapshotUrls: 'https://i.gkd.li/import/12818528',
        },
        {
          key: 2,
          activityIds: 'com.hunantv.imgo.activity.MainActivity',
          quickFind: true,
          matches:
            '[id="com.hunantv.imgo.activity:id/ivPromotion"] + [id="com.hunantv.imgo.activity:id/btnClose"]',
          snapshotUrls: 'https://i.gkd.li/import/13761169',
        },
      ],
    },
    {
      key: 3,
      name: '局部广告-右侧悬浮广告',
      activityIds: 'com.hunantv.imgo.activity.MainActivity',
      rules: [
        {
          key: 0,
          matches:
            '@[id="com.hunantv.imgo.activity:id/apperience_close"] + [id="com.hunantv.imgo.activity:id/apperience_enter"]',
          snapshotUrls: 'https://i.gkd.li/import/12818430',
        },
        {
          key: 1,
          matches:
            '@[id="com.hunantv.imgo.activity:id/iv_float_close"] + [id="com.hunantv.imgo.activity:id/iv_float_content"]',
          snapshotUrls: 'https://i.gkd.li/import/12818481',
        },
      ],
    },
  ],
});
