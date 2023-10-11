import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.xmcy.hykb',
  name: '好游快爆',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.xmcy.hykb.app.ui.splash.SplashActivity',
      rules: '[id="com.xmcy.hykb:id/skip"][text^="跳过"]',
      snapshotUrls: 'https://gkd-kit.songe.li/import/12774856',
    },
    {
      key: 1,
      name: '更新弹窗',
      activityIds: 'com.xmcy.hykb.app.dialog.UpdateDialog',
      rules:
        '@[id="com.xmcy.hykb:id/iv_inner_button_close"] - RelativeLayout >n [id="com.xmcy.hykb:id/text_update_tip"]',
      snapshotUrls: 'https://gkd-kit.songe.li/import/12870604',
    },
  ],
});
