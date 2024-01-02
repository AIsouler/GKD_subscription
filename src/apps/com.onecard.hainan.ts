import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.onecard.hainan',
  name: '海南一卡通',
  groups: [
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
            'https://i.gkd.li/import/12662114',
            'https://i.gkd.li/import/12662136',
          ],
        },
      ],
    },
  ],
});
