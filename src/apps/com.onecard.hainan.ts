import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.onecard.hainan',
  name: '海南一卡通',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: [
        'com.hainan.renshe.app.ui.SplashActivity',
        'com.miui.home.launcher.Launcher',
      ],
      rules: [
        {
          matches: '[id="com.onecard.hainan:id/tv_jump"][text$="跳过"]',
          snapshotUrls: [
            'https://i.gkd.li/import/import/12662092',
            'https://i.gkd.li/import/import/12662129',
          ],
        },
      ],
    },
    {
      key: 1,
      name: '更新弹窗',
      activityIds: [
        'com.hainan.renshe.app.ui.SplashActivity',
        'com.miui.home.launcher.Launcher',
      ],
      rules: [
        {
          matches: '@[text="暂不更新"] +(2) [text="立即更新"]',
          snapshotUrls: [
            'https://i.gkd.li/import/import/12662114',
            'https://i.gkd.li/import/import/12662136',
          ],
        },
      ],
    },
  ],
});
