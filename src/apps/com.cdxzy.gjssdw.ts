import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.cdxzy.gjssdw',
  name: '公交实时定位',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          fastQuery: true,
          anyMatches: [
            '@View[text=null][clickable=true][childCount=0][visibleToUser=true][width<200&&height<200] +(1,2) TextView[index=parent.childCount.minus(1)][childCount=0] <n FrameLayout[childCount>2][text=null][desc=null] >(n+6) [text*="第三方应用" || text*="扭动手机" || text*="点击或上滑" || text*="省钱好物" || text*="扭一扭"][visibleToUser=true]',
            'FrameLayout > FrameLayout[childCount>2][text=null][desc=null] > @View[text=null][clickable=true][childCount=0][visibleToUser=true][width<200&&height<200] +(1,2) TextView[index=parent.childCount.minus(1)][childCount=0][visibleToUser=true]',
          ],
          exampleUrls: 'https://e.gkd.li/71b97b0e-053c-4338-b82a-530c4b759c1c',
          snapshotUrls: 'https://i.gkd.li/i/20796307',
          excludeSnapshotUrls: 'https://i.gkd.li/i/20796034', // 全局规则在此误触
        },
      ],
    },
  ],
});
