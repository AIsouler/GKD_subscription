import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.cubic.autohome',
  name: '汽车之家',
  deprecatedKeys: [0],
  groups: [
    {
      key: 1,
      name: '弹窗广告',
      activityIds: 'com.cubic.autohome.MainActivity',
      rules: '[id="com.cubic.autohome:id/operate_show_exit_layout"]',
      snapshotUrls: 'https://i.gkd.li/import/12836324',
    },
  ],
});
