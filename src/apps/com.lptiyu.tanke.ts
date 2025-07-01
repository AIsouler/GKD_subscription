import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.lptiyu.tanke',
  name: '步道乐跑',
  groups: [
    {
      key: 0,
      name: '全屏广告-弹窗广告',
      rules: [
        {
          key: 0,
          name: '腾讯广告-1',
          activityIds: 'com.lptiyu.tanke.activities.main.MainActivity',
          matches:
            '[id="com.lptiyu.tanke:id/interact_ad_root"] >n [id="com.lptiyu.tanke:id/iv_close"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12829816',
            'https://i.gkd.li/i/12869344',
            'https://i.gkd.li/i/13378925',
          ],
        },
        {
          key: 1,
          name: '腾讯广告-2',
          fastQuery: true,
          activityIds: 'com.lptiyu.tanke.activities.main.MainActivity',
          matches:
            '@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null][parent.childCount>3] +n FrameLayout >(1,2) [text^="立即" || text="查看详情" || text="了解更多" || text="去微信看看" || text$="应用" || text="进入小程序" || text="领取优惠" || text="跳转微信"]',
          snapshotUrls: 'https://i.gkd.li/i/13070801',
        },
        {
          key: 2,
          name: '快手广告-1',
          fastQuery: true,
          activityIds: [
            'com.lptiyu.tanke.activities.splash.SplashActivity',
            'com.lptiyu.tanke.activities.school_run_record_detail.RunRecordDetailActivity',
          ],
          matches:
            'ImageView[childCount=0][text=null] < @ViewGroup[childCount=1][clickable=true][visibleToUser=true] < ViewGroup +n ViewGroup[childCount=2] > [text="广告"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13218232',
            'https://i.gkd.li/i/13536714',
          ],
        },
        {
          key: 3,
          name: '快手广告-2',
          fastQuery: true,
          activityIds: 'com.lptiyu.tanke.activities.splash.SplashActivity',
          matches:
            '[text="广告"] <2 ViewGroup - ViewGroup > ViewGroup > [text="跳过"]',
          snapshotUrls: 'https://i.gkd.li/i/13476172',
        },
        {
          key: 4,
          name: '快手广告-3',
          fastQuery: true,
          activityIds: 'com.lptiyu.tanke.activities.splash.SplashActivity',
          matches:
            '[id="com.lptiyu.tanke:id/ksad_splash_circle_skip_left_view"]',
          snapshotUrls: 'https://i.gkd.li/i/13625386',
        },
        {
          key: 5,
          name: '其他广告',
          activityIds: 'com.lptiyu.tanke.activities.splash.SplashActivity',
          matches:
            '@LinearLayout > [id="com.lptiyu.tanke:id/skip_parent_view"]',
          snapshotUrls: 'https://i.gkd.li/i/13166361',
        },
      ],
    },
  ],
});
