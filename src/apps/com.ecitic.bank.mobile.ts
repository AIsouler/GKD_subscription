import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.ecitic.bank.mobile',
  name: '中信银行',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: ['com.ecitic.bank.mobile.ui.SplashActivity'],
      rules: '[id="com.ecitic.bank.mobile:id/skip_adv_layout"]',
      snapshotUrls: ['https://i.gkd.li/import/12701203'],
    },
    {
      key: 1,
      name: '更新弹窗',
      activityIds: [
        'com.ecitic.bank.mobile.ui.MainActivity',
        'com.miui.home.launcher.Launcher',
      ],
      rules: '@[text="暂不更新"] + [text="立即更新"]',
      snapshotUrls: [
        'https://i.gkd.li/import/12701217',
        'https://i.gkd.li/import/12701250', // activityId: 'com.miui.home.launcher.Launcher'
      ],
    },
    {
      key: 2,
      name: '广告弹窗',
      activityIds: ['com.ecitic.bank.mobile.ui.webview.CordovaWebViewActivity'],
      rules:
        '[id="com.ecitic.bank.mobile:id/id_cordova_view"] + [id="com.ecitic.bank.mobile:id/close_product_send"]',
      snapshotUrls: ['https://i.gkd.li/import/12701230'],
    },
  ],
});
