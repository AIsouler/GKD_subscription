import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.anshibo.activity',
  name: '车e兴',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          anyMatches: [
            '@View[text=null][clickable=true][childCount=0][visibleToUser=true][width<200&&height<200] +(1,2) TextView[index=parent.childCount.minus(1)][childCount=0] <n FrameLayout[childCount>2][text=null][desc=null] >(n+6) [text*="第三方应用" || text*="扭动手机" || text*="点击或上滑" || text*="省钱好物" || text*="扭一扭"][visibleToUser=true]',
            'FrameLayout > FrameLayout[childCount>2][text=null][desc=null] > @View[text=null][clickable=true][childCount=0][visibleToUser=true][width<200&&height<200] +(1,2) TextView[index=parent.childCount.minus(1)][childCount=0][visibleToUser=true]',
          ],
          exampleUrls: 'https://e.gkd.li/7f58925f-39dd-40c3-a8f1-f6e5268eced4',
          snapshotUrls: 'https://i.gkd.li/i/18046569',
          excludeSnapshotUrls: 'https://i.gkd.li/i/18047812', // 全局规则 key: 1 在此提前触发消耗次数
        },
      ],
    },
  ],
});
