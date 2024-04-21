import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.shinyv.cnr',
  name: '云听',
  groups: [
    {
      key: 1,
      name: '全屏广告-首页弹窗广告',
      activityIds: 'yt.com.module.home.MainActivity',
      rules:
        '[id="com.shinyv.cnr:id/iv_ad"] + [id="com.shinyv.cnr:id/iv_close"]',
      snapshotUrls: 'https://i.gkd.li/i/12817933',
    },
  ],
});
