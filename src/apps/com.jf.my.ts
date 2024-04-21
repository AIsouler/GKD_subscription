import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.jf.my',
  name: '蜜源',
  groups: [
    {
      key: 0,
      name: '更新提示-版本升级弹窗',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches:
            '[id="com.jf.my:id/btn_ok"][text="更新"] - [id="com.jf.my:id/btn_cancel"][text="关闭"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12838034',
            'https://i.gkd.li/i/12840591',
          ],
        },
        {
          matches:
            '[id="com.jf.my:id/toUpgradeTv"] - [id="com.jf.my:id/cancelTv"]',
          snapshotUrls: 'https://i.gkd.li/i/13786867',
        },
      ],
    },
    {
      key: 1,
      name: '全屏广告-首页弹窗广告',
      activityIds: 'com.jf.my.main.ui.dialog.HomeRedPackageDialog',
      rules: '[id="com.jf.my:id/iv_back"]',
      snapshotUrls: 'https://i.gkd.li/i/12840619',
    },
  ],
});
