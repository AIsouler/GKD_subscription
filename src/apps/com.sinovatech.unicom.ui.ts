import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.sinovatech.unicom.ui',
  name: '中国联通',
  groups: [
    {
      key: 1,
      name: '权限提示',
      fastQuery: true,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: [
        'com.sinovatech.unicom.basic.ui.activity.MainActivity',
        'com.sinovatech.unicom.basic.ui.activity.WelcomeClient',
      ],
      rules: '[text="去开启"] - [vid="custom_dialog_cancel_button"]',
      snapshotUrls: [
        'https://i.gkd.li/i/13331268',
        'https://i.gkd.li/i/14751210',
      ],
    },
    {
      key: 2,
      name: '更新提示',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[id="com.sinovatech.unicom.ui:id/custom_dialog_cancel_button"]',
      snapshotUrls: 'https://i.gkd.li/i/13511386',
    },
    {
      key: 3,
      name: '全屏广告-弹窗广告',
      fastQuery: true,
      rules: [
        {
          key: 0,
          forcedTime: 10000,
          activityIds: 'com.sinovatech.unicom.basic.ui.activity.MainActivity',
          matches:
            '[text="首页弹窗"] >2 View > @Image[clickable=true][text!=null] <<n [vid="main_fragment_layout"]',
          snapshotUrls: 'https://i.gkd.li/i/14504242',
        },
        {
          key: 1,
          activityIds: 'com.sinovatech.unicom.basic.ui.activity.MainActivity',
          matches:
            '@TextView[childCount=0][clickable=true][id="home_popup_close"] <<n [vid="main_fragment_layout_haoka"]',
          snapshotUrls: 'https://i.gkd.li/i/15971964',
        },
      ],
    },
    {
      key: 4,
      fastQuery: true,
      name: '局部广告-首页右下角卡片悬浮窗',
      desc: '点击X',
      rules: [
        {
          activityIds: 'com.sinovatech.unicom.basic.ui.activity.MainActivity',
          matches: '[id="com.sinovatech.unicom.ui:id/home_xuanfu_close"]',
          snapshotUrls: 'https://i.gkd.li/i/13930543',
        },
      ],
    },
  ],
});
