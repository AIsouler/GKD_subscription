import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.realtech.xiaocan',
  name: '小蚕霸王餐',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          activityIds: 'com.realtech.xiaocan.MainActivity',
          matches:
            'View[childCount=3] > View + ImageView + ImageView[clickable=true][childCount=0]',
          snapshotUrls: 'https://i.gkd.li/i/13694864',
        },
      ],
    },
    {
      key: 2,
      name: '功能类-签到成功弹窗',
      desc: '点击[关闭]按钮',
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'com.realtech.xiaocan.MainActivity',
          matches:
            '[id="android:id/content"] >5 View[childCount=6] > ImageView[index=5][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/14290847',
        },
      ],
    },
  ],
});
