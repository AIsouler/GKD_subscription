import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.ants360.yicamera',
  name: '小蚁摄像机',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      fastQuery: true,
      rules: [
        {
          key: 0,
          matches:
            '@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null] - FrameLayout[childCount>2] >3 [text^="立即" || text$="应用" || text="了解更多" || text="查看详情"]',
          snapshotUrls: 'https://i.gkd.li/i/13463241',
        },
        {
          key: 1,
          matches:
            'ImageView[childCount=0][text=null] < @ViewGroup[childCount=1][clickable=true][visibleToUser=true] < ViewGroup +3 ViewGroup[childCount=2] > [text="广告"]',
          snapshotUrls: 'https://i.gkd.li/i/13543175',
        },
        {
          key: 2,
          activityIds: [
            '.activity.MainActivity',
            'com.xiaoyi.yiplayer.ui.PlayerActivity',
          ],
          matches: '@[vid="ivClose"] - [text="专属福利"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/a7ba5126-27dd-450d-abf9-c3a8b6938727',
          snapshotUrls: [
            'https://i.gkd.li/i/18410909',
            'https://i.gkd.li/i/22652775',
          ],
        },
        {
          key: 3,
          activityIds: [
            'com.baidu.mobads.sdk.api.MobRewardVideoActivity',
            'com.yd.saas.base.inner.interstitial.YdInterstitialActivity',
          ],
          matches: '[vid="iv_close"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/1af231f8-bb98-450e-83d1-5bd067802de3',
          snapshotUrls: [
            'https://i.gkd.li/i/19514818',
            'https://i.gkd.li/i/19722625',
            'https://i.gkd.li/i/22652776',
          ],
        },
        {
          key: 4,
          activityIds: 'com.baidu.mobads.sdk.api.MobRewardVideoActivity',
          matches:
            '@ImageView[clickable=true][childCount=0][visibleToUser=true] + RelativeLayout >2 [text="反馈"]',
          exampleUrls: 'https://e.gkd.li/af626eb0-e24d-446d-8137-a4a9839ebc20',
          snapshotUrls: 'https://i.gkd.li/i/19514819',
        },
      ],
    },
    {
      key: 2,
      name: '权限提示-通知权限',
      rules: [
        {
          fastQuery: true,
          activityIds: [
            'com.xiaoyi.yiplayer.ui.PlayerActivity',
            '.activity.MainActivity',
            '.activity.camera.LandscapePlayerActivity',
          ],
          matches: [
            '[text="开启通知"][visibleToUser=true]',
            '[text="暂不开启"][visibleToUser=true]',
          ],
          exampleUrls: 'https://e.gkd.li/1cb1471e-94a5-430f-ac2f-b031413a067e',
          snapshotUrls: [
            'https://i.gkd.li/i/18395740',
            'https://i.gkd.li/i/19503517',
            'https://i.gkd.li/i/19722627',
          ],
        },
      ],
    },
    {
      key: 3,
      name: '局部广告-卡片广告',
      desc: '点击关闭',
      rules: [
        {
          key: 0,
          fastQuery: true,
          activityIds: '.activity.MainActivity',
          matches:
            '@ImageView[childCount=0][visibleToUser=true] < FrameLayout[childCount=1] - LinearLayout[childCount=2] > [text="下载应用" || text="立即下载" || text="查看详情" || text="领取优惠" || text="进入小程序" || text="了解更多"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/c9e67d26-d65f-4e24-9f62-cc29f29cff9b',
          snapshotUrls: 'https://i.gkd.li/i/18406158',
        },
        {
          key: 1,
          fastQuery: true,
          activityIds: '.activity.MainActivity',
          matches:
            '@[clickable=true][id="com.kwad.dy.sdk:id/ksad_ad_dislike"] <<n [vid="ad_container"]',
          exampleUrls: 'https://e.gkd.li/2d358b3b-6a8e-4ebf-813b-03d01d18d5f1',
          snapshotUrls: 'https://i.gkd.li/i/22652771',
        },
        {
          key: 2,
          fastQuery: true,
          activityIds: 'com.xiaoyi.yiplayer.ui.PlayerActivity',
          matches:
            'FrameLayout > FrameLayout > FrameLayout[childCount=1] > @ImageView[childCount=0][width<50 && height<50] <<n [vid="adContainer"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/2c38cc0d-06e6-4075-86f8-cbb9c2453840',
          snapshotUrls: 'https://i.gkd.li/i/22652772',
        },
      ],
    },
  ],
});
