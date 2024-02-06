import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.lenovo.leos.appstore',
  name: '联想应用中心',
  groups: [
    {
      key: 0,
      name: '更新提示',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      quickFind: true,
      rules:
        '@[id="com.lenovo.leos.appstore:id/dialog_cancel"] + [text$="版本更新"]',
      snapshotUrls: 'https://i.gkd.li/import/13401992',
    },
    {
      key: 1,
      name: '通知提示-请求通知权限弹窗',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds:
        'com.lenovo.leos.appstore.activities.NotificationGuideActivity',
      quickFind: true,
      rules: '[text$="打开应用中心通知"] +n [text="知道了"]',
      snapshotUrls: 'https://i.gkd.li/import/13401991',
    },
  ],
});
