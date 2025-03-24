import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.anshibo.activity',
  name: '车e兴',
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
          anyMatches: [
            '@View[clickable=true][text=null][visibleToUser=true] + TextView[index=parent.childCount.minus(1)][text=null] <n FrameLayout[childCount>2] >(7,8,9,10) [text*="第三方应用" || text*="扭动手机" || text*="点击或上滑"][visibleToUser=true]',
            'FrameLayout > FrameLayout[childCount>2] > @View[clickable=true][text=null][visibleToUser=true] + TextView[index=parent.childCount.minus(1)][text=null][visibleToUser=true]',
          ],
          exampleUrls: 'https://e.gkd.li/7f58925f-39dd-40c3-a8f1-f6e5268eced4',
          snapshotUrls: 'https://i.gkd.li/i/18046569',
          excludeSnapshotUrls: 'https://i.gkd.li/i/18047812', // 全局规则 key: 1 在此提前触发消耗次数
        },
      ],
    },
  ],
});
