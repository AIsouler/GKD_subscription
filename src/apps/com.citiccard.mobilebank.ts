import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.citiccard.mobilebank',
  name: '动卡空间',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: ['com.citiccard.mobilebankapp.WelcomeActivity'],
      quickFind: true,
      rules: [
        {
          matches: '[id="com.citiccard.mobilebank:id/btn_skip"]',
          snapshotUrls: ['https://i.gkd.li/import/12684908'],
        },
        {
          matches: '[id="com.citiccard.mobilebank:id/jump"]',
          snapshotUrls: ['https://i.gkd.li/import/13049013'],
        },
      ],
    },
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      activityIds: [
        'com.citiccard.mobilebank.card.activity.BillDetailHomeActivity',
      ],
      quickFind: true,
      rules: [
        {
          matches: '[id="com.citiccard.mobilebank:id/iv_bill_home_cancel"]',
          snapshotUrls: ['https://i.gkd.li/import/13049284'],
        },
      ],
    },
    {
      key: 2,
      name: '通知提示-通知权限弹窗',
      desc: '点击关闭',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      quickFind: true,
      rules: [
        {
          matches:
            '[id="com.citiccard.mobilebank:id/ll_app_upgrade_content"] + [id="com.citiccard.mobilebank:id/iv_close"]',
          snapshotUrls: ['https://i.gkd.li/import/13049283'],
        },
      ],
    },
  ],
});
