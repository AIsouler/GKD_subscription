import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.generalcomp.batian',
  name: '霸天安云',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          fastQuery: true,
          activityIds:
            'com.zasko.modulemain.mvpdisplay.activity.X35MainActivity',
          matches:
            '@ImageView[childCount=0][text=null][visibleToUser=true] < FrameLayout[childCount=1] <2 FrameLayout[childCount=2] <2 FrameLayout[childCount=2] <2 FrameLayout[childCount=2] - FrameLayout > [text^="扭动或点击"]',
          exampleUrls: 'https://e.gkd.li/5b7e260d-6896-4e9d-bbbf-062f5ec02b86',
          snapshotUrls: 'https://i.gkd.li/i/17742964',
        },
        {
          key: 1,
          fastQuery: true,
          activityIds:
            'com.zasko.modulemain.mvpdisplay.activity.X35CommonDisplayActivity',
          matches:
            '@ImageView[visibleToUser=true][id=null][width<100 && height<100] <2 FrameLayout[childCount=3] < FrameLayout[childCount=1] < FrameLayout[childCount=1] < [id="android:id/content"]',
          exampleUrls: 'https://e.gkd.li/9b44f7b6-fe7e-4c9d-ac5f-6a41a7b507b3',
          snapshotUrls: 'https://i.gkd.li/i/17735543',
        },
      ],
    },
    {
      key: 2,
      name: '局部广告-卡片广告',
      desc: '点击关闭',
      rules: [
        {
          key: 0,
          fastQuery: true,
          activityIds:
            'com.zasko.modulemain.mvpdisplay.activity.X35CommonDisplayActivity',
          matches:
            'ImageView[childCount=0] < @ViewGroup[childCount=1][clickable=true][visibleToUser=true] <2 ViewGroup[childCount=2] <2 ViewGroup[childCount=2] <2 ViewGroup[childCount=2] - ViewGroup[childCount=2] >3 [text="广告"]',
          exampleUrls: 'https://e.gkd.li/8f24af69-0022-47c9-88a6-d5b949b377f8',
          snapshotUrls: 'https://i.gkd.li/i/17735536',
        },
        {
          key: 1,
          fastQuery: true,
          activityIds:
            'com.zasko.modulemain.mvpdisplay.activity.X35MainActivity',
          matches:
            '@Image[childCount=0][visibleToUser=true] < View[childCount=1] -3 View[childCount=2] >2 [visibleToUser=true][text="广告"] <<n [vid="native_ad_container"]',
          exampleUrls: 'https://e.gkd.li/42c397f9-4fc5-4a87-950d-cd6a86783c24',
          snapshotUrls: 'https://i.gkd.li/i/17735537',
        },
      ],
    },
  ],
});
