import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.black.unique',
  name: '全球购骑士特权',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'com.black.unique.feature.home.HomeActivity',
          matches: '@ImageView[id="com.black.unique:id/iv_close"]',
          snapshotUrls: 'https://i.gkd.li/i/13499502',
        },
      ],
    },
    {
      key: 2,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          anyMatches: [
            '@View[text=null][clickable=true][childCount=0][visibleToUser=true][width<200&&height<200] +(1,2) TextView[index=parent.childCount.minus(1)][text=null] <n FrameLayout[childCount>2] >(7,8,9,10) [text*="第三方应用" || text*="扭动手机" || text*="点击或上滑"][visibleToUser=true]',
            'FrameLayout > FrameLayout[childCount>2] > @View[text=null][clickable=true][childCount=0][visibleToUser=true][width<200&&height<200] +(1,2) TextView[index=parent.childCount.minus(1)][text=null][visibleToUser=true]',
          ],
          exampleUrls:
            'https://m.gkd.li/57941037/63a72bd6-72be-410c-86ab-09ba7a4fa318',
          snapshotUrls: 'https://i.gkd.li/i/14167393',
        },
      ],
    },
  ],
});
