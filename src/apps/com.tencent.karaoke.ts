import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.tencent.karaoke',
  name: '全民K歌',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      quickFind: true,
      rules: '[text^="跳过"][text.length<10]',
      snapshotUrls: 'https://i.gkd.li/import/13302490',
    },
    {
      key: 1,
      name: '卡片式广告',
      rules: [
        {
          key: 0,
          name: '动态页面-卡片式广告',
          activityIds: 'com.tencent.karaoke.module.main.ui.MainTabActivity',
          matches: 'RelativeLayout > [text="广告"] + ImageView',
          snapshotUrls: 'https://i.gkd.li/import/13334798',
        },
      ],
    },
    {
      key: 2,
      name: '弹窗广告',
      rules: [
        {
          key: 1,
          name: '活动弹窗',
          activityIds:
            'com.tencent.karaoke.module.splash.ui.SplashBaseActivity',
          matches:
            '[desc$="霸屏的按钮"] < ViewGroup + ViewGroup[childCount=1] > ViewGroup[childCount=0]',
          snapshotUrls: 'https://i.gkd.li/import/13363281',
        },
      ],
    },
  ],
});
