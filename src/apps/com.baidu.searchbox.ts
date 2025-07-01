import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.baidu.searchbox',
  name: '百度',
  groups: [
    {
      key: 1,
      name: '全屏广告-红包弹窗',
      desc: '点击关闭',
      fastQuery: true,
      rules: [
        {
          activityIds: 'com.baidu.searchbox.MainActivity',
          matches:
            '@View[vid="obfuscated"][clickable=true][visibleToUser=false] +3 [text="看视频，领现金"]',
          snapshotUrls: 'https://i.gkd.li/i/13806848',
        },
        {
          activityIds: 'com.baidu.searchbox.MainActivity',
          matches:
            '@ImageView[vid="obfuscated"][text=null][childCount=0][clickable=true][visibleToUser=true][index=1] <2 LinearLayout[childCount=2] < FrameLayout[childCount=1] < [id="android:id/content"]',
          snapshotUrls: 'https://i.gkd.li/i/13988536',
        },
        {
          activityIds: 'com.baidu.searchbox.MainActivity',
          matches:
            '@ImageView[vid="obfuscated"][text=null][childCount=0][clickable=true][visibleToUser=true] +4 [text^="继续看视频"]',
          snapshotUrls: 'https://i.gkd.li/i/14034223',
        },
      ],
    },
    {
      key: 2,
      name: '更新提示',
      desc: '点击关闭',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.update.UpdateDialogActivity',
          matches:
            '@ImageView[desc="关闭"] <2 RelativeLayout < [id="android:id/content"]',
          exampleUrls:
            'https://m.gkd.li/57941037/f2712b2e-7327-4068-bcff-92646b3400bd',
          snapshotUrls: 'https://i.gkd.li/i/14730100',
        },
      ],
    },
  ],
});
