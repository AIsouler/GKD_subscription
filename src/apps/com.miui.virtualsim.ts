import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.miui.virtualsim',
  name: '全球上网',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      activityIds: 'com.mobile.businesshall.ui.common.RecommendPopupActivity',
      rules: '[id="com.miui.virtualsim:id/img_close_btn"]',
      snapshotUrls: 'https://i.gkd.li/i/13238467',
    },
  ],
});
