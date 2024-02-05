import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.miui.virtualsim',
  name: '全球上网',
  groups: [
    {
      key: 1,
      name: '全屏广告-广告弹窗',
      activityIds: 'com.mobile.businesshall.ui.common.RecommendPopupActivity',
      rules: '[id="com.miui.virtualsim:id/img_close_btn"]',
      snapshotUrls: 'https://i.gkd.li/import/13238467',
    },
  ],
});
