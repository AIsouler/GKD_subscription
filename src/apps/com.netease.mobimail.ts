import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.netease.mobimail',
  name: '网易邮箱',
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
          matches:
            '[text*="跳过"][text.length<=10][id!="com.netease.mobimail:id/ad_skip"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12686132',
            'https://i.gkd.li/i/13328441',
            'https://i.gkd.li/i/13800060',
          ],
        },
        {
          key: 1,
          anyMatches: [
            '@View[clickable=true][text=null][visibleToUser=true] + TextView[index=parent.childCount.minus(1)][text=null] <n FrameLayout[childCount>2] >(7,8,9,10) [text*="第三方应用" || text*="扭动手机" || text*="点击或上滑"][visibleToUser=true]',
            'FrameLayout > FrameLayout[childCount>2] > @View[clickable=true][text=null][visibleToUser=true] + TextView[index=parent.childCount.minus(1)][text=null][visibleToUser=true]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/12686093',
        },
        {
          key: 2,
          fastQuery: true,
          matches: '[id="com.netease.mobimail:id/ad_skip"][clickable=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/12667519',
            'https://i.gkd.li/i/13328425', // 限定 [clickable=true] 防止误触假的跳过按钮
          ],
        },
      ],
    },
    {
      key: 1,
      name: '局部广告-邮件列表页面广告条目',
      rules: [
        {
          activityIds: 'com.netease.mail.biz.main.MainITabActivity',
          matches:
            '[id="com.netease.mobimail:id/ad_vip" || id="com.netease.mobimail:id/ll_delete"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12683488',
            'https://i.gkd.li/i/12683511',
          ],
        },
      ],
    },
  ],
});
