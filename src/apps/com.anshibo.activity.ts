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
          matches:
            'FrameLayout > FrameLayout[childCount>2] > @View[clickable=true][text=null][visibleToUser=true] + TextView[visibleToUser=true][text=null][index=parent.childCount.minus(1)]',
          exampleUrls: 'https://e.gkd.li/7f58925f-39dd-40c3-a8f1-f6e5268eced4',
          snapshotUrls: 'https://i.gkd.li/i/18046569',
          excludeSnapshotUrls: 'https://i.gkd.li/i/18047812', // 全局规则 key: 1 在此提前触发消耗次数
        },
      ],
    },
  ],
});
