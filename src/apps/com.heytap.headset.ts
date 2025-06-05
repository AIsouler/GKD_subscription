import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.heytap.headset',
  name: '欢律',
  groups: [
    {
      key: 0,
      name: '更新提示',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.component.about.FindAppUpgradeActivity',
          matches: [
            '[text="发现新版本"][visibleToUser=true]',
            '[text="取消"][visibleToUser=true]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/14971296',
            'https://i.gkd.li/i/20601909',
          ],
        },
      ],
    },
    {
      key: 1,
      name: '更新提示-耳机固件更新弹窗',
      desc: '点击取消',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.component.detail.DeviceDetailActivity',
          matches: [
            '[text="耳机固件更新"][visibleToUser=true]',
            '[text="取消"][visibleToUser=true]',
          ],
          exampleUrls: 'https://e.gkd.li/2336ee00-71e3-4e5e-b6e1-d81ea412b67b',
          snapshotUrls: 'https://i.gkd.li/i/20601911',
        },
      ],
    },
  ],
});
