import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.chaoxing.mobile',
  name: '学习通',
  deprecatedKeys: [0],
  groups: [
    {
      key: 10,
      name: '开启消息通知',
      desc: '自动点击关闭',
      enable: false,
      quickFind: true,
      activityIds: 'com.chaoxing.mobile.main.ui.MainTabActivity',
      rules: '[id="com.chaoxing.mobile:id/vNotificationItemClose"]',
      snapshotUrls: 'https://i.gkd.li/import/13197374',
    },
  ],
});
