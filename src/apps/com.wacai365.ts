import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.wacai365',
  name: '挖财记账',
  groups: [
    {
      key: 1,
      name: '更新提示',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: [
            'com.wacai365.HomeActivity',
            'com.wacai.android.wind.splash.WindDialogActivity',
          ],
          matches:
            '@ImageView[id="com.wacai365:id/tv_cancel"] - TextView[text^="新版本"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13249620',
            'https://i.gkd.li/i/13772291',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '全屏广告-弹窗广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'com.wacai365.HomeActivity',
          matches: '[id^="com.wacai365:id/promote_banner_close"]',
          snapshotUrls: 'https://i.gkd.li/i/13249666',
        },
      ],
    },
    {
      key: 3,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      actionMaximumKey: 0,
      priorityTime: 10000,
      rules: [
        {
          key: 0,
          matches:
            'FrameLayout > FrameLayout[childCount>2] > @View[clickable=true][text=null][visibleToUser=true] + TextView[visibleToUser=true][text=null][index=parent.childCount.minus(1)]',
          snapshotUrls: 'https://i.gkd.li/i/14021540',
        },
        {
          key: 1,
          fastQuery: true,
          matches: '[text*="跳过"][text.length<10][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/13399124',
        },
      ],
    },
  ],
});
