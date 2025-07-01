import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'ctrip.android.view',
  name: '携程旅行',
  groups: [
    {
      key: 1,
      name: '更新提示',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds:
            'ctrip.android.publicproduct.home.view.CtripHomeActivity',
          matches:
            '@ImageView[desc="关闭"][clickable=true][visibleToUser=true] <3 FrameLayout < FrameLayout < [id="android:id/content"]',
          snapshotUrls: 'https://i.gkd.li/i/13218347',
        },
      ],
    },
    {
      key: 2,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      rules: [
        {
          key: 0,
          fastQuery: true,
          matchTime: 10000,
          actionMaximum: 1,
          resetMatch: 'app',
          activityIds:
            'ctrip.android.publicproduct.home.view.CtripHomeActivity',
          matches:
            '@ImageView[clickable=true] < RelativeLayout + RelativeLayout >5 [desc^="广告"] + [text="立即领取"]',
          exampleUrls: 'https://e.gkd.li/00628604-fab9-432c-a70b-343c8c889c23',
          snapshotUrls: 'https://i.gkd.li/i/16357287',
        },
        {
          key: 1,
          fastQuery: true,
          matchTime: 10000,
          actionMaximum: 1,
          activityIds: 'ctrip.business.planthome.CtripPlantHomeActivity',
          matches:
            '@ImageView[clickable=true][childCount=0][visibleToUser=true] <4 FrameLayout[childCount=4] < FrameLayout < FrameLayout < [id="android:id/content"]',
          exampleUrls: 'https://e.gkd.li/cdc28230-6ea7-4cf7-bef4-a31f7e36eed1',
          snapshotUrls: 'https://i.gkd.li/i/19050401',
        },
        {
          key: 2,
          fastQuery: true,
          matchTime: 10000,
          actionMaximum: 1,
          resetMatch: 'app',
          activityIds:
            'ctrip.android.publicproduct.home.business.activity.CtripHomeActivity',
          matches:
            '@ImageView[childCount=0][clickable=true][visibleToUser=true][width<120 && height<120] < RelativeLayout[childCount=1] < RelativeLayout[childCount=2] < [id="android:id/content"]',
          exampleUrls: 'https://e.gkd.li/065da3a4-b746-4ec7-a681-a6fd687c5f70',
          snapshotUrls: 'https://i.gkd.li/i/20921664',
        },
      ],
    },
  ],
});
