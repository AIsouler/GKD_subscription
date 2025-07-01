import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.vgjump.jump',
  name: 'Jump',
  groups: [
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
            '.ui.content.msg.MsgIndexActivity',
          ],
          matches: [
            '[text="开启推送通知"][visibleToUser=true]',
            '[vid="ivClose" || vid="tvClose"][visibleToUser=true]',
          ],
          exampleUrls: 'https://e.gkd.li/ce574950-4233-477e-b0cc-a4b0d18df249',
          snapshotUrls: [
            'https://i.gkd.li/i/17828834',
            'https://i.gkd.li/i/17949205',
            'https://i.gkd.li/i/18022146',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '局部广告-信息流广告/卡片广告',
      desc: '点击关闭',
      rules: [
        {
          fastQuery: true,
          activityIds: [
            '.ui.game.detail.GameDetailActivity',
            '.ui.content.detail.ContentDetailActivity',
            '.ui.main.MainActivity',
          ],
          matches: '[vid="ivSDKClose"][visibleToUser=true]',
          exampleUrls: [
            'https://e.gkd.li/388a915b-5b91-4a4a-8bd3-330b346b2864',
            'https://e.gkd.li/d68c487b-ce63-4d9f-afc3-cc94b3490a33',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/17949888',
            'https://i.gkd.li/i/17949885',
            'https://i.gkd.li/i/18004837',
          ],
        },
      ],
    },
  ],
});
