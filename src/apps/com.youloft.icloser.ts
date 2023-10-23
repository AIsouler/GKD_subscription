import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.youloft.icloser',
  name: '心动日常',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      matchLauncher: true,
      activityIds: ['com.youloft.icloser.splash.AdSplashActivity'],
      rules: [
        {
          matches: [
            'TextView[text^="跳过"]',
            '[id="com.byted.pangle:id/tt_splash_skip_btn"]',
          ],
          snapshotUrls: [
            'https://gkd-kit.gitee.io/import/12910405',
            'https://i.gkd.li/import/13072365',
          ],
        },
      ],
    },
    {
      key: 1,
      name: '购买会员-弹窗广告',
      enable: false,
      quickFind: true,
      activityIds: 'com.youloft.icloser.view.dialog.VipRetainPacketDialog',
      rules: '[id="com.youloft.icloser:id/tv_later_buy"]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/13067183',
    },
  ],
});
