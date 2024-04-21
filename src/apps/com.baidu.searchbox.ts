import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.baidu.searchbox',
  name: '百度',
  groups: [
    {
      key: 1,
      name: '全屏广告-红包弹窗',
      desc: '点击关闭',
      rules: [
        {
          activityIds: 'com.baidu.searchbox.MainActivity',
          matches: '[text^="看视频"] -2 ImageView[index=4]',
          snapshotUrls: 'https://i.gkd.li/i/13806848',
        },
        {
          activityIds: 'com.baidu.searchbox.MainActivity',
          matches:
            '[id="android:id/content"] >2 LinearLayout[childCount=2] > ImageView[index=1]',
          snapshotUrls: 'https://i.gkd.li/i/13988536',
        },
        {
          activityIds: 'com.baidu.searchbox.MainActivity',
          matches: 'ViewGroup[childCount=7] > ImageView[index=1]',
          snapshotUrls: 'https://i.gkd.li/i/14034223',
        },
      ],
    },
    {
      key: 2,
      name: '更新提示',
      desc: '点击关闭',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches:
            '[id="android:id/content"] > RelativeLayout > [vid="obfuscated"] + [desc="关闭"]',
          exampleUrls:
            'https://m.gkd.li/57941037/f2712b2e-7327-4068-bcff-92646b3400bd',
          snapshotUrls: [
            'https://i.gkd.li/i/14730100',
            'https://i.gkd.li/i/14896700', // 避免误触
          ],
        },
      ],
    },
  ],
});
