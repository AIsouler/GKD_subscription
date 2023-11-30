import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.sinovatech.unicom.ui',
  name: '中国联通',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[id="com.sinovatech.unicom.ui:id/welcome_advertise_close"]',
      snapshotUrls: 'https://i.gkd.li/import/12535185',
    },
    {
      key: 1,
      name: '权限申请',
      quickFind: true,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: 'com.sinovatech.unicom.basic.ui.activity.MainActivity',
      rules:
        '[text="去开启"] - [id="com.sinovatech.unicom.ui:id/custom_dialog_cancel_button"]',
      snapshotUrls: 'https://i.gkd.li/import/13331268',
    },
    {
      key: 2,
      name: '版本更新',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: 'com.sinovatech.unicom.basic.ui.activity.MainActivity',
      rules: '[id="com.sinovatech.unicom.ui:id/custom_dialog_cancel_button"]',
      snapshotUrls: 'https://i.gkd.li/import/13511386',
    },
  ],
});
