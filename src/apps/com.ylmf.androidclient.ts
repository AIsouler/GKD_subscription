import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.ylmf.androidclient',
  name: '115',
  groups: [
    {
      key: 1,
      name: '功能类-自动签到',
      quickFind: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          name: '点击[签到]',
          activityIds: 'com.ylmf.androidclient.UI.MainBossActivity',
          matches: '@[clickable=true] >2 [text="签到"]',
          exampleUrls:
            'https://m.gkd.li/57941037/09c2ac32-9364-4a1f-9f49-c05c5695d5a0',
          snapshotUrls: [
            'https://i.gkd.li/i/14738911', // 签到前
            'https://i.gkd.li/i/14738906', // 签到后
          ],
        },
        {
          preKeys: [0],
          key: 1,
          name: '点击[我知道了]',
          activityIds: 'com.main.world.equity.activity.SignInActivity',
          matches: '[text="我知道了"]',
          exampleUrls:
            'https://m.gkd.li/57941037/fd597dc2-b926-44fa-acaf-ec7cfa41813a',
          snapshotUrls: 'https://i.gkd.li/i/14738909',
        },
        {
          preKeys: [1],
          key: 2,
          name: '返回',
          action: 'back',
          activityIds: 'com.main.world.equity.activity.SignInActivity',
          matches: '[text="签到规则"]',
          exampleUrls:
            'https://m.gkd.li/57941037/9d445e18-91dc-4e6c-a765-3a1593230d7b',
          snapshotUrls: 'https://i.gkd.li/i/14738907',
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
