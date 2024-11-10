import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.zbx.ct.tvzhibo',
  name: '手机电视高清直播',
  groups: [
    {
      key: 3,
      name: '全屏广告-弹窗广告',
      rules: [
        {
          key: 0,
          name: '字节SDK',
          activityIds:
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          matches: '@Image[text.length=0] < View -n [text="反馈"]',
          snapshotUrls: 'https://i.gkd.li/i/13739951',
        },
        {
          key: 1,
          name: '腾讯SDK',
          activityIds: 'com.tvmain.mvp.view.activity.TvMainActivity',
          matches: '@ImageView < FrameLayout <n FrameLayout + TextView',
          snapshotUrls: 'https://i.gkd.li/i/13766516',
        },
      ],
    },
    {
      key: 4,
      name: '局部广告-浮窗广告',
      desc: '会出现在更多页面、播放页面',
      fastQuery: true,
      rules: [
        {
          activityIds: [
            'com.tvmain.mvp.view.activity.TvMainActivity',
            'com.tvmain.mvp.view.activity.LivePlayerActivity',
          ],
          matches: '[id="com.zbx.ct.tvzhibo:id/iv_close"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13740079',
            'https://i.gkd.li/i/13740126',
          ],
        },
      ],
    },
    {
      key: 5,
      name: '全屏广告-播放页面弹窗广告',
      desc: '点击关闭',
      fastQuery: true,
      rules: [
        {
          activityIds: 'com.tvmain.mvp.view.activity.VodPlayerActivity',
          matches:
            '@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null][parent.childCount>3] +n FrameLayout >(1,2) [text^="立即" || text="查看详情" || text="了解更多" || text="去微信看看" || text$="应用" || text="进入小程序" || text="领取优惠" || text="跳转微信"]',
          snapshotUrls: 'https://i.gkd.li/i/13739932',
        },
      ],
    },
  ],
});
