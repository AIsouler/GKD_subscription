import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.bankcomm.Bankcomm',
  name: '交通银行',
  groups: [
    {
      key: 0,
      activityIds: [
        'com.bankcomm.module.biz.home.MainActivity',
        'com.hihonor.android.launcher.unihome.UniHomeLauncher',
      ],
      name: '全屏广告-首页弹窗广告',
      desc: '点击右上角x',
      rules:
        '[id="com.bankcomm.Bankcomm:id/popup_ad_image"] - [id="com.bankcomm.Bankcomm:id/popup_close"]',
      // 貌似快照里位置和截图不对应
      snapshotUrls: [
        'https://i.gkd.li/import/12671987',
        'https://i.gkd.li/import/12745293', // activityId: 'com.hihonor.android.launcher.unihome.UniHomeLauncher'
      ],
    },
    {
      key: 1,
      name: '更新提示',
      desc: '点击 暂不更新',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: [
        'com.bankcomm.module.biz.webcontainer.BCMHtml5Activity',
        'com.bankcomm.module.biz.home.MainActivity',
      ],
      rules: '[id = "com.bankcomm.Bankcomm:id/tvNotNow" && text = "暂不更新"]',
      snapshotUrls: 'https://i.gkd.li/import/12842484',
    },
  ],
});
