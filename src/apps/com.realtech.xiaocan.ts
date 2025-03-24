import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.realtech.xiaocan',
  name: '小蚕霸王餐',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      actionMaximumKey: 1,
      priorityTime: 10000,
      rules: [
        {
          key: 1,
          fastQuery: true,
          matches: '[text^="跳过"][text.length<=10]',
          snapshotUrls: [
            'https://i.gkd.li/i/12843368',
            'https://i.gkd.li/i/13363222',
            'https://i.gkd.li/i/13363246',
          ],
        },
        {
          key: 2,
          anyMatches: [
            '@View[clickable=true][text=null][visibleToUser=true] + TextView[index=parent.childCount.minus(1)][text=null] <n FrameLayout[childCount>2] >(7,8,9,10) [text*="第三方应用" || text*="扭动手机" || text*="点击或上滑"][visibleToUser=true]',
            'FrameLayout > FrameLayout[childCount>2] > @View[clickable=true][text=null][visibleToUser=true] + TextView[index=parent.childCount.minus(1)][text=null][visibleToUser=true]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/13694858',
            'https://i.gkd.li/i/13794403',
            'https://i.gkd.li/i/12854728',
          ],
        },
      ],
    },
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
