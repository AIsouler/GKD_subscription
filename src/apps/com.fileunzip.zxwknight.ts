import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.fileunzip.zxwknight',
  name: '解压专家',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      rules: [
        {
          key: 1,
          name: '字节广告',
          activityIds:
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          matches: 'Image < @View[visibleToUser=true] +4 [text="反馈"]',
          snapshotUrls: 'https://i.gkd.li/i/13328194',
        },
        {
          key: 2,
          name: '腾讯广告',
          fastQuery: true,
          matches:
            '@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null][parent.childCount>3] +n FrameLayout >(1,2) [text^="立即" || text="查看详情" || text="了解更多" || text="去微信看看" || text$="应用" || text="进入小程序" || text="领取优惠" || text="跳转微信"]',
          snapshotUrls: 'https://i.gkd.li/i/13391833',
        },
      ],
    },
    {
      key: 2,
      name: '全屏广告-升级专业版弹窗',
      fastQuery: true,
      activityIds: [
        'com.fileunzip.zxwknight.activity.MainActivity',
        'com.fileunzip.zxwknight.activity.VideoPlayActivity',
      ],
      rules: '@[vid="ziputil_dialog_imageview"] < * > [text="升级到专业版"]',
      snapshotUrls: [
        'https://i.gkd.li/i/13328212',
        'https://i.gkd.li/i/14885336',
      ],
    },
    {
      key: 3,
      name: '全屏广告-软件推广',
      desc: '全能保险箱',
      fastQuery: true,
      rules: [
        {
          key: 0,
          matches: '[vid="dialog_recommend_back"]',
          exampleUrls:
            'https://m.gkd.li/57941037/de127f4b-5de6-41ab-a1ea-5a98f7eeab58',
          snapshotUrls: 'https://i.gkd.li/i/14472568',
        },
        {
          key: 1,
          activityIds: 'com.fileunzip.zxwknight.activity.MainActivity',
          matches: '@[text="本次启动不再提示"][checked=false]',
          exampleUrls:
            'https://m.gkd.li/57941037/57e29faf-2806-4166-a21d-839f1479960d',
          snapshotUrls: 'https://i.gkd.li/i/14885425',
        },
        {
          preKeys: [1],
          key: 2,
          activityIds: 'com.fileunzip.zxwknight.activity.MainActivity',
          matches: '[vid="promote_vault_full_screen_close"]',
          exampleUrls:
            'https://m.gkd.li/57941037/57e29faf-2806-4166-a21d-839f1479960d',
          snapshotUrls: 'https://i.gkd.li/i/14885425',
        },
      ],
    },
    {
      key: 4,
      name: '更新提示',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches: '@[vid="ziputil_dialog_imageview"] + [text="有新版本啦"]',
          exampleUrls:
            'https://m.gkd.li/57941037/a428a59c-5cdd-47e9-bfc5-492b43ed169a',
          snapshotUrls: 'https://i.gkd.li/i/14900121',
        },
      ],
    },
  ],
});
