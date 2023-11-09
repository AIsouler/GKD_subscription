import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.lptiyu.tanke',
  name: '步道乐跑',
  groups: [
    {
      key: -1,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[text="跳过"][text.length<10]',
      snapshotUrls: [
        'https://i.gkd.li/import/13070420',
        'https://gkd-kit.gitee.io/import/13293751',
      ],
    },
    {
      key: 0,
      name: '广告弹窗',
      rules: [
        {
          key: 0,
          activityIds: 'com.lptiyu.tanke.activities.main.MainActivity',
          matches:
            '[id="com.lptiyu.tanke:id/interact_ad_root"] >n [id="com.lptiyu.tanke:id/iv_close"]',
          snapshotUrls: [
            'https://gkd-kit.gitee.io/import/12829816',
            'https://i.gkd.li/import/12869344',
          ],
        },
        {
          key: 1,
          activityIds: 'com.lptiyu.tanke.activities.main.MainActivity',
          matches: 'ImageView - FrameLayout > FrameLayout > ImageView',
          snapshotUrls: 'https://i.gkd.li/import/13070801',
        },
        {
          key: 2,
          activityIds: 'com.lptiyu.tanke.activities.splash.SplashActivity',
          matches:
            '@LinearLayout > [id="com.lptiyu.tanke:id/skip_parent_view"]',
          snapshotUrls: 'https://i.gkd.li/import/13166361',
        },
        {
          key: 3,
          activityIds: 'com.lptiyu.tanke.activities.splash.SplashActivity',
          matches:
            '[id="com.lptiyu.tanke:id/ksad_tk_view"] >n ViewGroup > @ViewGroup[clickable=true][childCount=1] > ImageView',
          snapshotUrls: 'https://i.gkd.li/import/13218232',
        },
      ],
    },
  ],
});
