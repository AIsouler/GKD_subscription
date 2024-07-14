import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.wuba.zhuanzhuan',
  name: '转转',
  groups: [
    {
      key: 1,
      name: '更新提示',
      fastQuery: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          matches:
            '@[text="下次再说" || text="残忍拒绝"] < * > [text^="立即"][text.length=4]',
          snapshotUrls: [
            'https://i.gkd.li/i/14292849',
            'https://i.gkd.li/i/14392301',
          ],
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
          activityIds:
            'com.zhuanzhuan.module.reach.channel.impl.uicode.ReachDialogActivity',
          matches:
            '[id="android:id/content"] > ViewGroup[childCount=3] >2 ViewGroup[childCount=3] > ImageView[clickable=true][index=2]',
          snapshotUrls: 'https://i.gkd.li/i/14927441',
        },
        {
          key: 1,
          activityIds:
            'com.zhuanzhuan.module.reach.channel.impl.uicode.ReachDialogActivity',
          matches:
            '[id="android:id/content"] > ViewGroup[childCount=3] > FrameLayout > ViewGroup[childCount=2] > ImageView[index=1]',
          snapshotUrls: 'https://i.gkd.li/i/15140820',
        },
      ],
    },
    {
      key: 3,
      name: '评价提示',
      desc: '点击关闭',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches:
            '@ImageView[clickable=true] - ViewGroup > [text="喜欢就给个好评吧"]',
          snapshotUrls: 'https://i.gkd.li/i/15881026',
        },
      ],
    },
  ],
});
