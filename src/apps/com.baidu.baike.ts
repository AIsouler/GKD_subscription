import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.baidu.baike',
  name: '百度百科',
  deprecatedKeys: [0],
  groups: [
    {
      key: 10,
      name: '通知提示-请求通知权限弹窗',
      desc: '自动点击"不允许"',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: 'com.baidu.baike.component.push.NotificationEnableDialog',
      rules: '[text^="打开推送通知"] +2 [text="不允许"]',
      snapshotUrls: 'https://i.gkd.li/import/12755717',
    },
  ],
});
