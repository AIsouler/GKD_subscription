import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.ideal.flyerteacafes',
  name: '飞客',
  deprecatedKeys: [7],
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[text*="跳过"][text.length<=10]',
      snapshotUrls: 'https://i.gkd.li/import/13466120',
    },
    {
      key: 3,
      name: '广告弹窗',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: 'com.ideal.flyerteacafes.ui.HomeActivity',
      rules:
        '@[id="com.ideal.flyerteacafes:id/close"] - FrameLayout > [id="com.ideal.flyerteacafes:id/tv_time_down"]',
      snapshotUrls: 'https://i.gkd.li/import/13466119',
    },
  ],
});
