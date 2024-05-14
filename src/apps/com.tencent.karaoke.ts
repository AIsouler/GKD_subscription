import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tencent.karaoke',
  name: '全民K歌',
  groups: [
    {
      key: 1,
      name: '局部广告-卡片广告',
      rules: [
        {
          key: 0,
          name: '动态页面-卡片广告',
          activityIds: 'com.tencent.karaoke.module.main.ui.MainTabActivity',
          matches: 'RelativeLayout > [text="广告"] + ImageView',
          snapshotUrls: 'https://i.gkd.li/i/13334798',
        },
      ],
    },
    {
      key: 2,
      name: '全屏广告-弹窗广告',
      rules: [
        {
          key: 1,
          name: '活动弹窗',
          activityIds:
            'com.tencent.karaoke.module.splash.ui.SplashBaseActivity',
          matches:
            '[desc$="霸屏的按钮"] < ViewGroup + ViewGroup[childCount=1] > ViewGroup[childCount=0]',
          snapshotUrls: 'https://i.gkd.li/i/13363281',
        },
      ],
    },
  ],
});
