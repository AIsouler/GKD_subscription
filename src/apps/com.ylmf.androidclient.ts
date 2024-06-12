import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
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
          name: '点击[生活]',
          key: 0,
          preKeys: [0],
          matches: 'TextView[text="生活"]',
          exampleUrls: 'https://m.gkd.li/152465495/41fd5bf8-cfef-45bf-8031-35fc768f70c5',
          snapshotUrls: 'https://i.gkd.li/i/15509328',
          quickFind: true,
          activityIds: ['com.ylmf.androidclient.UI.MainBossActivity']
        },
        {
          name: '点击[签到]',
          key: 1,
          preKeys: [1],
          matches: ['@[clickable=true] >2 [text="签到"]'],
          snapshotUrls: [
            'https://i.gkd.li/i/14738911',
            'https://i.gkd.li/i/14738906'
          ],
          exampleUrls: ['https://m.gkd.li/57941037/09c2ac32-9364-4a1f-9f49-c05c5695d5a0'],
          activityIds: ['com.ylmf.androidclient.UI.MainBossActivity']
        },
        {
          name: '点击[签到的图片]',
          key: 2,
          preKeys: [2],
          quickFind: true,
          activityIds: 'com.main.world.equity.activity.SignInRewardActivity',
          matches: 'ImageView[id="com.ylmf.androidclient:id/iv_sign_in_btn"]',
          exampleUrls: 'https://m.gkd.li/152465495/16b7a361-0211-4705-ab90-721e04bb1713',
          snapshotUrls: 'https://i.gkd.li/i/15510753',
        },
        {
          name: '点击[我知道了]',
          key: 3,
          preKeys: [3],
          quickFind: true,
          activityIds: 'com.main.world.equity.activity.SignInRewardActivity',
          matches: '[text="我知道了"]',
          exampleUrls: 'https://m.gkd.li/152465495/b3023a66-5946-49c2-abd3-8168eada361e',
          snapshotUrls: 'https://i.gkd.li/i/15510873',
        },
        {
          name: '返回',
          key: 4,
          preKeys: [4],
          action: 'back',
          quickFind: true,
          activityIds: 'com.main.world.equity.activity.SignInRewardActivity',
          matches: 'ImageView[vid="iv_menu_back"]',
          exampleUrls: 'https://m.gkd.li/152465495/172a5c45-c60d-4381-b0e8-37789cc567d6',
          snapshotUrls: 'https://i.gkd.li/i/15509322',
        }, 
        {
          key: 5,
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
              exampleUrls:'https://m.gkd.li/57941037/43d4fa0c-789c-4cf7-aa12-7232e9d23e6d',
              snapshotUrls: 'https://i.gkd.li/i/14738944',
            },
          ],
        }
      ]
    },
  ],
});