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
          matches:
            '[id="android:id/content"] >(3,4) FrameLayout[childCount>4] > FrameLayout[childCount=1] > ImageView',
          snapshotUrls: 'https://i.gkd.li/i/13391833',
        },
      ],
    },
    {
      key: 2,
      name: '全屏广告-升级专业版弹窗',
      quickFind: true,
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
      quickFind: true,
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
      quickFind: true,
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
