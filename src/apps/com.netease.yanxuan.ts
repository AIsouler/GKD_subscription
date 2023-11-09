import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.netease.yanxuan',
  name: '网易严选',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.netease.yanxuan.module.splash.SplashActivity',
      rules: '[id = "com.netease.yanxuan:id/splash_pic_jump_container"]',
      snapshotUrls: 'https://i.gkd.li/import/import/12840637',
    },
    {
      key: 1,
      name: '首页-弹窗广告',
      activityIds:
        'com.netease.yanxuan.module.mainpage.activity.MainPageActivity',
      rules: '[id="com.netease.yanxuan:id/trans_cancel"]',
      snapshotUrls: 'https://i.gkd.li/import/import/12840641',
    },
  ],
});
