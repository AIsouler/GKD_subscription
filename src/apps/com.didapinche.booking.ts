import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.didapinche.booking',
  name: '嘀嗒出行',
  groups: [
    {
      key: 1,
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
          activityIds: '.home.activity.StartActivity',
          matches:
            '@[text.length<10][text*="跳过"][visibleToUser=true] <<n [vid="flCSJAdContainer"]',
          exampleUrls: 'https://e.gkd.li/155b2ddf-0bd2-4963-b35d-c7aa40a575e7',
          snapshotUrls: 'https://i.gkd.li/i/18094436',
        },
        {
          key: 1,
          anyMatches: [
            '@View[clickable=true][text=null][visibleToUser=true] + TextView[index=parent.childCount.minus(1)][text=null] <n FrameLayout[childCount>2] >(7,8,9,10) [text*="第三方应用" || text*="扭动手机" || text*="点击或上滑"][visibleToUser=true]',
            'FrameLayout > FrameLayout[childCount>2] > @View[clickable=true][text=null][visibleToUser=true] + TextView[index=parent.childCount.minus(1)][text=null][visibleToUser=true]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/13988957',
            'https://i.gkd.li/i/13989178',
          ],
        },
      ],
    },
  ],
});
