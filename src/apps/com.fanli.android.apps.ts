import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.fanli.android.apps',
  name: '返利',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      activityIds:
        'com.fanli.android.module.webview.ui.activity.TransparentBrowserInnerActivity',
      rules: '[id="J_poplayer_box"] >n @View + [text="main_bkg"]',
      snapshotUrls: 'https://i.gkd.li/i/13245808',
    },
  ],
});
