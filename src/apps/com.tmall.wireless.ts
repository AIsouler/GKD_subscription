import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.tmall.wireless',
  name: '手机天猫',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[id="com.tmall.wireless:id/splash_ad_txt_skip"]',
      snapshotUrls: 'https://i.gkd.li/import/13162604',
    },
    {
      key: 1,
      name: '版本更新',
      quickFind: true,
      activityIds: [
        'com.tmall.wireless.splash.TMSplashActivity',
        'com.tmall.wireless.maintab.module.TMMainTabActivity',
        'com.tmall.wireless.webview.TMCommonWebViewActivity',
      ],
      rules: '[id="com.tmall.wireless:id/update_button_cancel"]',
      snapshotUrls: [
        'https://i.gkd.li/import/13162603', //com.tmall.wireless.splash.TMSplashActivity
        'https://i.gkd.li/import/13258201', //com.tmall.wireless.maintab.module.TMMainTabActivity
        'https://i.gkd.li/import/13399536', //com.tmall.wireless.webview.TMCommonWebViewActivity
      ],
    },
    {
      enable: false,
      key: 2,
      name: '弹窗广告',
      activityIds: [
        'com.tmall.wireless.maintab.module.TMMainTabActivity',
        'com.tmall.wireless.turboweb.container.TurboWebViewActivity',
        'com.tmall.wireless.webview.TMCommonWebViewActivity',
      ],
      rules:
        'Image[id=null][clickable=false] < View + Image[id=null][clickable=true]',
      snapshotUrls: [
        'https://i.gkd.li/import/13222394', //com.tmall.wireless.maintab.module.TMMainTabActivity
        'https://i.gkd.li/import/13222500', //com.tmall.wireless.turboweb.container.TurboWebViewActivity
        'https://i.gkd.li/import/13222510', //com.tmall.wireless.webview.TMCommonWebViewActivity
      ],
    },
    {
      key: 3,
      name: '系统通知',
      matchTime: 10000,
      actionMaximum: 1,
      activityIds:
        'com.tmall.wireless.messagebox.activity.TMMsgboxMainActivity',
      rules: 'View[text="开启系统通知"] - View[clickable=true]',
      snapshotUrls: 'https://i.gkd.li/import/13258215',
    },
  ],
});
