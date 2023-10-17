import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.alicloud.databox',
  name: '阿里网盘',
  groups: [
    {
      key: 0,
      name: '自动签到',
      activityIds: 'com.alicloud.databox.MainActivity',
      rules: '[id="com.alicloud.databox:id/tvTaskAction"][text="领取"]',
      snapshotUrls: 'https://gkd-kit.songe.li/import/12929318',
    },
  ],
});
