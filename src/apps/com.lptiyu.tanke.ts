import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.lptiyu.tanke',
  name: '步道乐跑',
  groups: [
    {
      key: 0,
      name: '弹窗广告',
      rules: [
        {
          key: 0,
          name: '腾讯广告-1',

          activityIds: 'com.lptiyu.tanke.activities.main.MainActivity',
          matches:
            '[id="com.lptiyu.tanke:id/interact_ad_root"] >n [id="com.lptiyu.tanke:id/iv_close"]',
          snapshotUrls: [
            'https://i.gkd.li/import/12829816',
            'https://i.gkd.li/import/12869344',
            'https://i.gkd.li/import/13378925',
          ],
        },
        {
          key: 1,
          name: '腾讯广告-2',
          activityIds: 'com.lptiyu.tanke.activities.main.MainActivity',
          matches: 'ImageView - FrameLayout > FrameLayout > ImageView',
          snapshotUrls: 'https://i.gkd.li/import/13070801',
        },
        {
          key: 2,
          name: '快手广告-1',
          activityIds: [
            'com.lptiyu.tanke.activities.splash.SplashActivity',
            'com.lptiyu.tanke.activities.school_run_record_detail.RunRecordDetailActivity',
          ],
          matches:
            '[text="广告"] <2 ViewGroup -n ViewGroup > @ViewGroup[childCount=1] > ImageView',
          snapshotUrls: [
            'https://i.gkd.li/import/13218232',
            'https://i.gkd.li/import/13536714',
          ],
        },
        {
          key: 3,
          name: '快手广告-2',
          activityIds: 'com.lptiyu.tanke.activities.splash.SplashActivity',
          quickFind: true,
          matches:
            '[text="广告"] <2 ViewGroup - ViewGroup > ViewGroup > [text="跳过"]',
          snapshotUrls: 'https://i.gkd.li/import/13476172',
        },
        {
          key: 4,
          name: '快手广告-3',
          activityIds: 'com.lptiyu.tanke.activities.splash.SplashActivity',
          quickFind: true,
          matches:
            '[id="com.lptiyu.tanke:id/ksad_splash_circle_skip_left_view"]',
          snapshotUrls: 'https://i.gkd.li/import/13625386',
        },
        {
          key: 5,
          name: '其他广告',
          activityIds: 'com.lptiyu.tanke.activities.splash.SplashActivity',
          matches:
            '@LinearLayout > [id="com.lptiyu.tanke:id/skip_parent_view"]',
          snapshotUrls: 'https://i.gkd.li/import/13166361',
        },
      ],
    },
  ],
});
