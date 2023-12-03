import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.hihonor.phoneservice',
  name: '我的荣耀',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[text^="跳过"][text.length<=10]',
      snapshotUrls: 'https://i.gkd.li/import/13523578',
    },
    {
      enable: false,
      key: 10,
      name: '请求位置权限提示信息',
      activityIds: 'com.hihonor.phoneservice.main.MainActivity',
      rules:
        '[text^="开启定位权限"] + [id="com.hihonor.phoneservice:id/iv_close"]',
      snapshotUrls: 'https://i.gkd.li/import/12783134',
    },
  ],
});
