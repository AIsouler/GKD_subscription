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
      name: '权限提示-通知权限',
      desc: '点击关闭',
      matchTime: 10000,
      actionMaximum: 2,
      resetMatch: 'app',
      rules: [
        {
          fastQuery: true,
          activityIds: [
            '.ui.my.favorite.FavoriteActivity',
            '.ui.game.detail.GameDetailActivity',
          ],
          matches: [
            '[text="开启推送通知"][visibleToUser=true]',
            '[vid="ivClose" || vid="tvClose"][visibleToUser=true]',
          ],
          exampleUrls: 'https://e.gkd.li/ce574950-4233-477e-b0cc-a4b0d18df249',
          snapshotUrls: [
            'https://i.gkd.li/i/17828834',
            'https://i.gkd.li/i/17949205',
          ],
        },
      ],
    },
  ],
});
