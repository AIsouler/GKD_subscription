import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.cf.dubaji',
  name: '毒霸姬',
  groups: [
    {
      key: 1,
      name: '更新提示',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          activityIds: '.module.main.MainActivity',
          matches:
            '[id="com.cf.dubaji:id/dlg_action_positive"][text="立即更新"]',
          action: 'back',
          snapshotUrls: 'https://i.gkd.li/i/13198107',
        },
      ],
    },
  ],
});
