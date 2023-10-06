import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.shinyv.cnr',
  name: '云听',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.shinyv.cnr.StartActivity',
      rules: '[id="com.shinyv.cnr:id/delet"][text^="跳过"]',
      snapshotUrls: 'https://gkd-kit.songe.li/import/12817925',
    },
    {
      key: 1,
      name: '首页广告弹窗',
      activityIds: 'yt.com.module.home.MainActivity',
      rules:
        '[id="com.shinyv.cnr:id/iv_ad"] + [id="com.shinyv.cnr:id/iv_close"]',
      snapshotUrls: 'https://gkd-kit.songe.li/import/12817933',
    },
  ],
});
