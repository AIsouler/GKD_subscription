import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.bankcomm.Bankcomm',
  name: '交通银行',
  groups: [
    {
      key: 0,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      rules: [
        {
          quickFind: true,
          activityIds: [
            'com.bankcomm.module.biz.home.MainActivity',
            'com.hihonor.android.launcher.unihome.UniHomeLauncher',
          ],
          matches: '[vid="popup_ad_image"] <n * > [vid="popup_close"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12671987',
            'https://i.gkd.li/i/12745293',
            'https://i.gkd.li/i/15046998',
          ],
        },
      ],
    },
    {
      key: 1,
      name: '更新提示',
      desc: '点击 暂不更新',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[id = "com.bankcomm.Bankcomm:id/tvNotNow" && text = "暂不更新"]',
      snapshotUrls: 'https://i.gkd.li/i/12842484',
    },
  ],
});
