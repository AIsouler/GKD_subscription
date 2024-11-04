import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'cn.gov.pbc.dcep',
  name: '数字人民币',
  groups: [
    {
      key: 1,
      name: '更新提示',
      fastQuery: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[vid="upgrade_dialog_cancel"][text!="退出应用"]',
      snapshotUrls: 'https://i.gkd.li/i/13840408',
      excludeSnapshotUrls: 'https://i.gkd.li/i/17607391',
    },
  ],
});
