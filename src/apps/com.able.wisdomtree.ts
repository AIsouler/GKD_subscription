import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.able.wisdomtree',
  name: '知到',
  groups: [
    {
      key: 2,
      name: '权限提示-通知权限',
      desc: '点击[暂不开启]',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: [
            '.widget.MyAlertDialog',
            '.login.MainGroupActivity',
            'com.example.advertisement_business.advertisement.AdvertisementActivity',
          ],
          matches: [
            '[text="开启消息推送通知"][visibleToUser=true]',
            '[text="暂不开启"][visibleToUser=true]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/13458779',
            'https://i.gkd.li/i/13623441',
            'https://i.gkd.li/i/13695447',
          ],
        },
      ],
    },
    {
      key: 3,
      name: '更新提示',
      desc: '点击[忽略]',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: [
            '.login.StartActivity',
            'com.example.advertisement_business.advertisement.AdvertisementActivity',
          ],
          matches: ['[text="更新"] ', ' [text="忽略"]'],
          snapshotUrls: [
            'https://i.gkd.li/i/13458796',
            'https://i.gkd.li/i/13797285',
          ],
        },
      ],
    },
  ],
});
