import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'cn.ms.pages',
  name: '飞鸟听书',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      rules: [
        {
          key: 0,
          name: '字节广告',
          activityIds:
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          matches:
            '@Image[text=""] < View +n View > View > TextView[text="广告"]',
          snapshotUrls: 'https://i.gkd.li/i/13450787',
        },
        {
          key: 1,
          quickFind: true,
          activityIds: 'cn.ms.pages.ActivityLingPai',
          matches:
            'ImageView < @ViewGroup[clickable=true] < ViewGroup +n ViewGroup [text="广告"]',
          snapshotUrls: 'https://i.gkd.li/i/16136277',
        },
        {
          key: 2,
          quickFind: true,
          activityIds: 'cn.ms.pages.ActivityLingPai',
          matches: ['[text="广告"]', '[text="跳过"]'],
          snapshotUrls: 'https://i.gkd.li/i/16136271',
        },
        {
          key: 3,
          activityIds:
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          matches: '[text="反馈"] +3 View > [text$="跳过"]',
          snapshotUrls: 'https://i.gkd.li/i/16136260',
        },
      ],
    },
    {
      key: 2,
      name: '分段广告-看视频得奖励广告',
      activityIds:
        'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
      rules: [
        {
          key: 0,
          matches:
            '[id="android:id/content"] >2 FrameLayout[childCount=3] >2 FrameLayout[childCount=3] >3 RelativeLayout[clickable=true]',
          exampleUrls:
            'https://m.gkd.li/57941037/fd1ff96e-6d17-4738-a2f1-3648169ce53c',
          snapshotUrls: 'https://i.gkd.li/i/16136235',
        },
        {
          preKeys: [0],
          key: 1,
          quickFind: true,
          matches: '[text="坚持退出"]',
          exampleUrls:
            'https://m.gkd.li/57941037/f09986f3-6dc6-4067-9136-ac6aa0afad3f',
          snapshotUrls: 'https://i.gkd.li/i/16136240',
        },
      ],
    },
  ],
});
