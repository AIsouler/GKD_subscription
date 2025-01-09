import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.uusense.speed',
  name: '测网速',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      desc: '点击【跳过】',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds:
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Activity_T',
          matches:
            'FrameLayout[childCount=5] > @View[name="android.view.View"][vid=null][text=null][desc=null][visibleToUser=true][width=150][height=150] + TextView',
          exampleUrls: 'https://e.gkd.li/60fb0a73-6948-43c6-bf76-e4f08632643f',
          snapshotUrls: 'https://i.gkd.li/i/18354647',
        },
      ],
    },
  ],
});
