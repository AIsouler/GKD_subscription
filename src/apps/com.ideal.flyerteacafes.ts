import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.ideal.flyerteacafes',
  name: '飞客',
  groups: [
    {
      key: 3,
      name: '全屏广告-弹窗广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'com.ideal.flyerteacafes.ui.HomeActivity',
          matches:
            '@[id="com.ideal.flyerteacafes:id/close"] - FrameLayout > [id="com.ideal.flyerteacafes:id/iv_adv_tip"]',
          snapshotUrls: 'https://i.gkd.li/i/13466119',
        },
      ],
    },
  ],
});
