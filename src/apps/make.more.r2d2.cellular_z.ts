import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'make.more.r2d2.cellular_z',
  name: 'Cellular-Z',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      actionMaximumKey: 0,
      priorityTime: 10000,
      rules: [
        {
          key: 0,
          fastQuery: true,
          matches: '[text*="跳过"][text.length<10][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/10fa1ebe-c208-4127-a456-48ac91901984',
          snapshotUrls: 'https://i.gkd.li/i/16486491',
        },
        {
          key: 1,
          anyMatches: [
            '@View[clickable=true][text=null][visibleToUser=true] + TextView[index=parent.childCount.minus(1)][text=null] <n FrameLayout[childCount>2] >(7,8,9,10) [text*="第三方应用" || text*="扭动手机" || text*="点击或上滑"][visibleToUser=true]',
            'FrameLayout > FrameLayout[childCount>2] > @View[clickable=true][text=null][visibleToUser=true] + TextView[index=parent.childCount.minus(1)][text=null][visibleToUser=true]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/13978978',
        },
      ],
    },
    {
      key: 2,
      name: '更新提示',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.activity.MonitorActivity',
          matches: ['[text="发现新版本"]', '[text="取消"]'],
          snapshotUrls: 'https://i.gkd.li/i/13608563',
        },
      ],
    },
  ],
});
