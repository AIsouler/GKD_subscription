import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tmall.wireless',
  name: '手机天猫',
  groups: [
    {
      key: 1,
      name: '更新提示',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: [
            '.splash.TMSplashActivity',
            '.maintab.module.TMMainTabActivity',
            '.webview.TMCommonWebViewActivity',
            '.themis.container.TMThemisActivity',
          ],
          matches: '[id="com.tmall.wireless:id/update_button_cancel"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13162603',
            'https://i.gkd.li/i/13258201',
            'https://i.gkd.li/i/13399536',
            'https://i.gkd.li/i/19881137',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '全屏广告-弹窗广告',
      rules: [
        {
          activityIds: [
            'com.tmall.wireless.maintab.module.TMMainTabActivity',
            'com.tmall.wireless.turboweb.container.TurboWebViewActivity',
            'com.tmall.wireless.webview.TMCommonWebViewActivity',
          ],
          matches:
            'Image[id=null][clickable=false] < View + Image[id=null][clickable=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/13222394',
            'https://i.gkd.li/i/13222500',
            'https://i.gkd.li/i/13222510',
          ],
        },
      ],
    },
    {
      key: 3,
      name: '权限提示-通知权限',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.messagebox.activity.TMMsgboxMainActivity',
          matches: 'View[text="开启系统通知"] - View[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13258215',
        },
      ],
    },
  ],
});
