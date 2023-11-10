import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.ygkj.chelaile.standard',
  name: '车来了',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[text^="跳过"][text.length<=10]',
      snapshotUrls: [
        'https://i.gkd.li/import/13062992',
        'https://i.gkd.li/import/13225111', //无ID
      ],
    },
    {
      key: 1,
      name: '应用内广告卡片',
      activityIds: 'dev.xesam.chelaile.app.module.func.SplashActivity',
      rules:
        'ImageView[id^="com.ygkj.chelaile.standard:id/cll_all_pic_close"][visibleToUser=true]',
      snapshotUrls: [
        'https://i.gkd.li/import/13062991',
        'https://i.gkd.li/import/13062984',
      ],
    },
  ],
});
