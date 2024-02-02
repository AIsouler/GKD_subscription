import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.xingye.app',
  name: '星野',
  groups: [
    {
      key: 1,
      name: '青少年模式弹窗',
      actionMaximum: 1,
      resetMatch: 'app',
      quickFind: true,
      rules: '[id="com.xingye.app:id/teenagerDialogConfirmTv"]',
      snapshotUrls: 'https://i.gkd.li/import/13766001',
    },
    {
      key: 2,
      name: '更新提示',
      actionMaximum: 1,
      resetMatch: 'app',
      quickFind: true,
      rules: '[vid="settingUpdateCancelTv"]',
      snapshotUrls: 'https://i.gkd.li/import/14137987',
    },
  ],
});
