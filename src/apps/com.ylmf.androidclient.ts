import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.ylmf.androidclient',
  name: '115生活',
  groups: [
    {
      key: 1,
      name: '功能类-自动签到',
      quickFind: true,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: [
        'com.ylmf.androidclient.UI.MainBossActivity',
        'com.main.world.equity.activity.SignInActivity',
        'com.main.world.equity.activity.SignInRewardActivity',
      ],
      rules: [
        {
          key: 0,
          name: '点击[签到]-1',
          matches: '@[clickable=true] >2 [text="签到"]',
          snapshotUrls: [
            'https://i.gkd.li/i/14738911', // 签到前
            'https://i.gkd.li/i/14738906', // 签到后
          ],
        },
        {
          preKeys: [0],
          key: 3,
          name: '点击[签到]-2',
          matches: '[vid="iv_sign_in_btn"]',
          snapshotUrls: 'https://i.gkd.li/i/15510753',
        },
        {
          preKeys: [0, 3],
          key: 1,
          name: '点击[我知道了]',
          matches: '[text="我知道了"]',
          snapshotUrls: [
            'https://i.gkd.li/i/14738909',
            'https://i.gkd.li/i/15510873',
          ],
        },
        {
          preKeys: [1],
          key: 2,
          name: '返回',
          action: 'back',
          matches: '[text="签到规则"]',
          snapshotUrls: [
            'https://i.gkd.li/i/14738907',
            'https://i.gkd.li/i/15509322',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '更新提示',
      desc: '点击[返回]关闭页面',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'com.ylmf.androidclient.UI.UpdateVersionActivity',
          matches: '@[desc="转到上一层级"] + [text="更新版本"]',
          exampleUrls:
            'https://m.gkd.li/57941037/43d4fa0c-789c-4cf7-aa12-7232e9d23e6d',
          snapshotUrls: 'https://i.gkd.li/i/14738944',
        },
      ],
    },
  ],
});
