import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.sinovatech.unicom.ui',
  name: '中国联通',
  groups: [
    {
      key: 1,
      name: '权限申请',
      quickFind: true,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: 'com.sinovatech.unicom.basic.ui.activity.MainActivity',
      rules:
        '[text="去开启"] - [id="com.sinovatech.unicom.ui:id/custom_dialog_cancel_button"]',
      snapshotUrls: 'https://i.gkd.li/import/13331268',
    },
    {
      key: 2,
      name: '版本更新',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: 'com.sinovatech.unicom.basic.ui.activity.MainActivity',
      rules: '[id="com.sinovatech.unicom.ui:id/custom_dialog_cancel_button"]',
      snapshotUrls: 'https://i.gkd.li/import/13511386',
    },
    {
      key: 3,
      name: '弹窗广告',
      rules: [
        {
          key: 0,
          name: '首页弹窗',
          activityIds: 'com.sinovatech.unicom.basic.ui.activity.MainActivity',
          matches:
            '[text="首页弹窗"] >n View + TextView + Image[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/import/13761130',
        },
      ],
    },
    {
      key: 4,
      quickFind: true,
      name: '局部广告-首页右下角卡片悬浮窗',
      desc: '点击X',
      rules: [
        {
          activityIds: 'com.sinovatech.unicom.basic.ui.activity.MainActivity',
          matches: '[id="com.sinovatech.unicom.ui:id/home_xuanfu_close"]',
          snapshotUrls: 'https://i.gkd.li/import/13930543',
        },
      ],
    },
  ],
});
