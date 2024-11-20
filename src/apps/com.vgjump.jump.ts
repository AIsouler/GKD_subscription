import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.vgjump.jump',
  name: 'Jump',
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
          snapshotUrls: [
            'https://i.gkd.li/i/14790888',
            'https://i.gkd.li/i/17444939',
          ],
        },
        {
          key: 1,
          matches:
            'FrameLayout > FrameLayout[childCount>2] > @View[clickable=true][text=null][visibleToUser=true] + TextView[visibleToUser=true][text=null][index=parent.childCount.minus(1)]',
          snapshotUrls: 'https://i.gkd.li/i/14446438',
        },
      ],
    },
    {
      key: 1,
      name: '通知提示-开启推送通知提醒',
      desc: '点击x',
      rules: [
        {
          fastQuery: true,
          activityIds: '.ui.my.favorite.FavoriteActivity',
          matches:
            'ViewGroup[vid="clNotificationGuide"] > ImageView[vid="ivClose"][visibleToUser=true][clickable=true]',
          exampleUrls: 'https://e.gkd.li/14fe147b-a993-43d3-9477-7dd3be7d2e54',
          snapshotUrls: 'https://i.gkd.li/i/17828834',
        },
      ],
    },
  ],
});
