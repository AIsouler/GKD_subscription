import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.tmall.wireless',
  name: '手机天猫',
  groups: [
    {
      key: 1,
      name: '更新提示',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      quickFind: true,
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
      name: '全屏广告-弹窗广告',
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
      name: '通知提示-请求系统通知弹窗',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: 'View[text="开启系统通知"] - View[clickable=true]',
      snapshotUrls: 'https://i.gkd.li/import/13258215',
    },
  ],
});
