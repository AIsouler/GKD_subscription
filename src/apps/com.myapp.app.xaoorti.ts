import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.myapp.app.xaoorti',
  name: '天天视频',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      fastQuery: true,
      rules: [
        {
          key: 0,
          name: '快手广告-1',
          activityIds: 'com.ys.resemble.ui.login.splash.SplashADSetActivity',
          matches: [
            '[text="广告"]',
            '@ImageView[clickable=true] - [text="|"] - [text$="s"]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/13520475',
        },
        {
          key: 1,
          name: '快手广告-2',
          activityIds: 'com.ys.resemble.ui.MainActivity',
          matches: ['[text="广告"]', '@ViewGroup > [text="跳过"]'],
          snapshotUrls: 'https://i.gkd.li/i/13546700',
        },
        {
          key: 2,
          name: '快手广告-3',
          activityIds: 'com.ys.resemble.ui.MainActivity',
          matches:
            'ImageView[childCount=0][text=null] < @ViewGroup[childCount=1][clickable=true][visibleToUser=true] < ViewGroup +n ViewGroup[childCount=2] > [text="广告"]',
          snapshotUrls: 'https://i.gkd.li/i/13546701',
        },
        {
          key: 3,
          name: '腾讯广告',
          activityIds: 'com.ys.resemble.ui.login.splash.SplashADSetActivity',
          matches:
            '@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null][parent.childCount>3] +n FrameLayout >(1,2) [text^="立即" || text="查看详情" || text="了解更多" || text="去微信看看" || text$="应用" || text="进入小程序" || text="领取优惠" || text="跳转微信"]',
          snapshotUrls: 'https://i.gkd.li/i/13520477',
        },
      ],
    },
  ],
});
