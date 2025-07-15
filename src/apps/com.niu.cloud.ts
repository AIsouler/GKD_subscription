import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.niu.cloud',
  name: '小牛电动',
  groups: [
    {
      key: 1,
      name: '更新提示-固件更新弹窗',
      desc: '点击[以后再说]',
      matchRoot: true, // https://github.com/AIsouler/GKD_subscription/issues/1051
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.main.MainActivityNew',
          matches: [
            '[text="发现新固件"][visibleToUser=true]',
            '[text="以后再说"][visibleToUser=true]',
          ],
          exampleUrls: 'https://e.gkd.li/b486cc0b-3ac2-4be3-a38d-c16c952f4fce',
          snapshotUrls: 'https://i.gkd.li/i/20919078',
        },
      ],
    },
    {
      key: 2,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          fastQuery: true,
          activityIds: '.main.MainActivityNew',
          matches: '[vid="closeDialogIv"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/78f2afd2-de8b-46b5-ae6c-6df58862f00e',
          snapshotUrls: 'https://i.gkd.li/i/20939822',
        },
      ],
    },
  ],
});
