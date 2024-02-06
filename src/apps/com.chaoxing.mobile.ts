import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.chaoxing.mobile',
  name: '学习通',
  deprecatedKeys: [0],
  groups: [
    {
      enable: false,
      key: 10,
      name: '通知提示-开启消息通知',
      desc: '自动点击关闭',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      quickFind: true,
      activityIds: 'com.chaoxing.mobile.main.ui.MainTabActivity',
      rules: '[id="com.chaoxing.mobile:id/vNotificationItemClose"]',
      snapshotUrls: 'https://i.gkd.li/import/13197374',
    },
  ],
});
