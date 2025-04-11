import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.mymoney',
  name: '随手记',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      desc: '点击跳过',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      actionMaximumKey: 0,
      priorityTime: 10000,
      rules: [
        {
          key: 0,
          anyMatches: [
            '@View[text=null][clickable=true][childCount=0][visibleToUser=true][width<200&&height<200] +(1,2) TextView[index=parent.childCount.minus(1)][text=null] <n FrameLayout[childCount>2] >(7,8,9,10) [text*="第三方应用" || text*="扭动手机" || text*="点击或上滑"][visibleToUser=true]',
            'FrameLayout > FrameLayout[childCount>2] > @View[text=null][clickable=true][childCount=0][visibleToUser=true][width<200&&height<200] +(1,2) TextView[index=parent.childCount.minus(1)][text=null][visibleToUser=true]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/13855760',
        },
        {
          key: 1,
          fastQuery: true,
          matches: '[text*="跳过"][text.length<=10]',
          snapshotUrls: [
            'https://i.gkd.li/i/13939216',
            'https://i.gkd.li/i/13939163',
          ],
        },
      ],
    },
  ],
});
