import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'cn.gov.pbc.dcep',
  name: '数字人民币',
  groups: [
    {
      key: 1,
      name: '更新提示',
      quickFind: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[vid="upgrade_dialog_cancel"]',
      snapshotUrls: 'https://i.gkd.li/i/13840408',
    },
  ],
});
