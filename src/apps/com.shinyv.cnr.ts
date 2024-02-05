import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.shinyv.cnr',
  name: '云听',
  groups: [
    {
      key: 1,
      name: '全屏广告-首页广告弹窗',
      activityIds: 'yt.com.module.home.MainActivity',
      rules:
        '[id="com.shinyv.cnr:id/iv_ad"] + [id="com.shinyv.cnr:id/iv_close"]',
      snapshotUrls: 'https://i.gkd.li/import/12817933',
    },
  ],
});
