import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.xbxxhz.box',
  name: '小白学习打印',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      rules: [
        {
          key: 0,
          name: '红包弹窗',
          fastQuery: true,
          activityIds: 'com.mango.login.main.MainAct',
          matches: '[vid="dg_dialog_frag_ads_popup_x"][clickable=true]',
          exampleUrls:
            'https://m.gkd.li/57941037/9137cb2d-fb8d-4782-b3c9-88b89b79c8a0',
          snapshotUrls: 'https://i.gkd.li/i/14433386',
        },
        {
          key: 1,
          activityIds:
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          matches: '@View +4 [text="反馈"]',
          exampleUrls:
            'https://m.gkd.li/57941037/1fa3e6e6-ce24-42a6-a4af-911eed7392e1',
          snapshotUrls: 'https://i.gkd.li/i/14459191',
        },
        {
          key: 2,
          fastQuery: true,
          activityIds: 'com.mango.appfile.print_finish.PrintFinishAct',
          matches:
            '@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null][parent.childCount>3] +n FrameLayout >(1,2) [text^="立即" || text="查看详情" || text="了解更多" || text="去微信看看" || text$="应用" || text="进入小程序" || text="领取优惠" || text="跳转微信"]',
          exampleUrls:
            'https://m.gkd.li/57941037/b0c3be3a-64a7-477e-a022-8a503ebd2cf6',
          snapshotUrls: 'https://i.gkd.li/i/14741407',
        },
      ],
    },
  ],
});
