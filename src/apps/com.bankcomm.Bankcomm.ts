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
      name: '首页弹窗广告',
      desc: '点击右上角x',
      rules:
        '[id="com.bankcomm.Bankcomm:id/popup_ad_image"] - [id="com.bankcomm.Bankcomm:id/popup_close"]',
      // 貌似快照里位置和截图不对应
      snapshotUrls: [
        'https://gkd-kit.gitee.io/import/12671987',
        'https://gkd-kit.songe.li/import/12745293', // activityId: 'com.hihonor.android.launcher.unihome.UniHomeLauncher'
      ],
    },
  ],
});
