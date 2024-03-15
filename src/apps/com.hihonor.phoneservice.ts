import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.hihonor.phoneservice',
  name: '我的荣耀',
  groups: [
    {
      key: 10,
      name: '定位提示-请求位置权限提示信息',
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: 'com.hihonor.phoneservice.main.MainActivity',
      rules:
        '[text^="开启定位权限"] + [id="com.hihonor.phoneservice:id/iv_close"]',
      snapshotUrls: 'https://i.gkd.li/i/12783134',
    },
  ],
});
