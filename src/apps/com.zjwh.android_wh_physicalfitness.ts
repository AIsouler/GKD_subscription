import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.zjwh.android_wh_physicalfitness',
  name: '运动世界校园',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          quickFind: true,
          matches: '[text*="跳过"][text.length<=10]',
          snapshotUrls: [
            'https://i.gkd.li/import/13166424',
            'https://i.gkd.li/import/13228145',
          ],
        },
      ],
    },
    {
      key: 1,
      name: '优量汇广告',
      activityIds: [
        'com.zjwh.android_wh_physicalfitness.activity.HomeActivity',
        'com.zjwh.android_wh_physicalfitness.ui.AdActivity',
      ],
      rules: [
        {
          matches:
            'ImageView - RelativeLayout >(3-n) [id="com.zjwh.android_wh_physicalfitness:id/iv_close"][clickable=true]',
          snapshotUrls: [
            'https://gkd-kit.gitee.io/import/12673231',
            'https://gkd-kit.gitee.io/import/12673523',
            'https://i.gkd.li/import/13166472', // com.zjwh.android_wh_physicalfitness.ui.AdActivity
          ],
        },
      ],
    },
    {
      key: 2,
      name: '百青藤广告',
      activityIds:
        'com.zjwh.android_wh_physicalfitness.activity.SplashActivity',
      rules: [
        {
          matches:
            '@[text="跳过"][clickable=true] +(3) RelativeLayout >(2) [text="点击跳转至第三方页面"]',
          snapshotUrls: ['https://gkd-kit.gitee.io/import/12673349'],
        },
      ],
    },
    {
      key: 3,
      name: '快手广告',
      activityIds:
        'com.zjwh.android_wh_physicalfitness.activity.SplashActivity',
      rules: [
        {
          key: 0,
          matches:
            '[id="com.kwad.dy.sdk:id/ksad_splash_root_container"] >n ViewGroup > [text="跳过"]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12673495',
        },
        {
          key: 1,
          matches:
            '[id="com.kwad.dy.sdk:id/ksad_tk_view"] >n ViewGroup > @ViewGroup[clickable=true] > ImageView',
          snapshotUrls: [
            'https://i.gkd.li/import/12826112',
            'https://i.gkd.li/import/12826124',
          ],
        },
        {
          key: 2,
          matches:
            '[id="com.zjwh.android_wh_physicalfitness:id/ksad_tk_view"] >n ViewGroup > @ViewGroup[childCount=1] > ImageView',
          snapshotUrls: 'https://i.gkd.li/import/13228216',
        },
      ],
    },
    {
      key: 9,
      name: '第三方SDK广告', // 不知道是什么SDK
      activityIds: 'com.zjwh.android_wh_physicalfitness.activity.HomeActivity',
      rules: [
        {
          matches:
            '[id="com.zjwh.android_wh_physicalfitness:id/ad_flag_source_layout"] + [id="com.zjwh.android_wh_physicalfitness:id/iv_close"][clickable=true]',
          snapshotUrls: ['https://gkd-kit.gitee.io/import/12673476'],
        },
      ],
    },
  ],
});
