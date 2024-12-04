import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.haier.uhome.uplus',
  name: '海尔智家',
  groups: [
    {
      key: 1,
      name: '更新提示',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.upgradeui.ui.UpgradeDialogActivity',
          matches: '@[text="取消"] + [text="立即更新"||text="立即安装"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12726844',
            'https://i.gkd.li/i/12726801',
          ],
        },
      ],
    },
    {
      key: 10,
      name: '权限提示-通知权限',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: '.ui.widget.MPermissionCheckDialog',
      rules: [
        {
          key: 0,
          matches: '@[checked=false] + [text="禁止后不在询问"]',
          exampleUrls: 'https://e.gkd.li/e1c6f008-4eba-4370-b7a1-054d0279956a',
          snapshotUrls: 'https://i.gkd.li/i/12726829',
        },
        {
          preKeys: [0],
          key: 1,
          matches: '[text="取消"]',
          exampleUrls: 'https://e.gkd.li/e1c6f008-4eba-4370-b7a1-054d0279956a',
          snapshotUrls: 'https://i.gkd.li/i/12726829',
        },
      ],
    },
  ],
});
