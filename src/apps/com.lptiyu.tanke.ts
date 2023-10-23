import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.lptiyu.tanke',
  name: '步道乐跑',
  groups: [
    {
      key: -1,
      name: '开屏广告',
      activityIds: 'com.lptiyu.tanke.activities.splash.SplashActivity',
      matchLauncher: true,
      rules:
        '[id="com.lptiyu.tanke:id/splash_full_tk_play_card_view"] >n [text="跳过"]',
      snapshotUrls: 'https://i.gkd.li/import/13070420',
    },
    {
      key: 0,
      name: '弹窗广告',
      activityIds: 'com.lptiyu.tanke.activities.main.MainActivity',
      rules: [
        {
          key: 0,
          matches:
            '[id="com.lptiyu.tanke:id/interact_ad_root"] >n [id="com.lptiyu.tanke:id/iv_close"]',
          snapshotUrls: [
            'https://gkd-kit.gitee.io/import/12829816',
            'https://i.gkd.li/import/12869344',
          ],
        },
        {
          key: 1,
          matches: 'ImageView - FrameLayout > FrameLayout > ImageView',
          snapshotUrls: 'https://i.gkd.li/import/13070801',
        },
      ],
    },
  ],
});
