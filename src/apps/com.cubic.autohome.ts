import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.cubic.autohome',
  name: '汽车之家',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.cubic.autohome.MainActivity',
      rules: '[id="com.cubic.autohome:id/ad_splash_skip"]',
      snapshotUrls: 'https://i.gkd.li/import/12660744',
    },
    {
      key: 1,
      name: '弹窗广告',
      activityIds: 'com.cubic.autohome.MainActivity',
      rules: '[id="com.cubic.autohome:id/operate_show_exit_layout"]',
      snapshotUrls: 'https://i.gkd.li/import/12836324',
    },
  ],
});
