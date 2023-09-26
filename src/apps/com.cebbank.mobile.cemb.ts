import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.cebbank.mobile.cemb',
  name: '光大银行',
  groups: [
    {
      key: 1,
      name: '更新弹窗',
      activityIds: 'com.cebbank.mobile.cemb.view.CustomizedDialog',
      rules: '@[text="不再提示"] +2 [text="立即更新"]',
      snapshotUrls: 'https://gkd-kit.songe.li/import/12727241',
    },
    {
      key: 2,
      name: '首页广告弹窗',
      activityIds: 'com.cebbank.mobile.cemb.ui.activity.SplashActivity',
      rules: '[id="com.cebbank.mobile.cemb:id/home_advertising_iv_close"]',
      snapshotUrls: 'https://gkd-kit.songe.li/import/12727248',
    },
  ],
});
