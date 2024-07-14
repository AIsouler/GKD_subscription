import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.xingye.app',
  name: '星野',
  groups: [
    {
      key: 1,
      name: '青少年模式',
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: '[id="com.xingye.app:id/teenagerDialogConfirmTv"]',
      snapshotUrls: 'https://i.gkd.li/i/13766001',
    },
    {
      key: 2,
      name: '更新提示',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: '[vid="settingUpdateCancelTv"]',
      snapshotUrls: 'https://i.gkd.li/i/14137987',
    },
  ],
});
