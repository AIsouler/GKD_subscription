import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.huatu.handheld_huatu',
  name: '华图在线',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.huatu.handheld_huatu.business.guide.SplashActivity',
      rules: '[id="com.huatu.handheld_huatu:id/splash_tv_jump"]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/12715734',
    },
    {
      key: 1,
      name: '首页广告弹窗',
      activityIds: [
        'com.huatu.handheld_huatu.view.MainPopDialog',
        'com.huatu.handheld_huatu.business.main.MainTabActivity',
      ],
      rules:
        '[id="com.huatu.handheld_huatu:id/main_img_adv_bg"] + [id="com.huatu.handheld_huatu:id/main_img_close"]',
      snapshotUrls: [
        'https://gkd-kit.gitee.io/import/12715702', // activityId: 'com.huatu.handheld_huatu.view.MainPopDialog'
        'https://i.gkd.li/import/12744973', // activityId: 'com.huatu.handheld_huatu.business.main.MainTabActivity'
      ],
    },
    {
      enable: false,
      key: 10,
      name: '请求通知权限弹窗',
      activityIds: 'com.huatu.handheld_huatu.business.main.MainTabActivity',
      rules: '[text*="开启通知提示"] +2 LinearLayout > [text="取消"]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/12715719',
    },
  ],
});
