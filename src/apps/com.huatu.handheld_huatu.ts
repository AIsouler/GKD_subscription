import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.huatu.handheld_huatu',
  name: '华图在线',
  groups: [
    {
      key: 1,
      name: '全屏广告-首页弹窗广告',
      activityIds: [
        'com.huatu.handheld_huatu.view.MainPopDialog',
        'com.huatu.handheld_huatu.business.main.MainTabActivity',
      ],
      rules:
        '[id="com.huatu.handheld_huatu:id/main_img_adv_bg"] + [id="com.huatu.handheld_huatu:id/main_img_close"]',
      snapshotUrls: [
        'https://i.gkd.li/i/12715702', // activityId: 'com.huatu.handheld_huatu.view.MainPopDialog'
        'https://i.gkd.li/i/12744973', // activityId: 'com.huatu.handheld_huatu.business.main.MainTabActivity'
      ],
    },
    {
      key: 10,
      name: '通知提示-请求通知权限弹窗',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[text*="开启通知提示"] +2 LinearLayout > [text="取消"]',
      snapshotUrls: 'https://i.gkd.li/i/12715719',
    },
  ],
});
