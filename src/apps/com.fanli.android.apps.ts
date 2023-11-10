import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.fanli.android.apps',
  name: '返利',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[text*="跳过"][text.length<=10]',
      snapshotUrls: 'https://i.gkd.li/import/13227495',
    },
    {
      key: 1,
      name: '应用内弹窗',
      activityIds:
        'com.fanli.android.module.webview.ui.activity.TransparentBrowserInnerActivity',
      rules: '[id="J_poplayer_box"] >n @View + [text="main_bkg"]',
      snapshotUrls: 'https://i.gkd.li/import/13245808',
    },
  ],
});
