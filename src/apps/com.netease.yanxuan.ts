import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.netease.yanxuan',
  name: '网易严选',
  groups: [
    {
      key: 1,
      name: '全屏广告-首页弹窗广告',
      activityIds:
        'com.netease.yanxuan.module.mainpage.activity.MainPageActivity',
      rules: '[id="com.netease.yanxuan:id/trans_cancel"]',
      snapshotUrls: 'https://i.gkd.li/i/12840641',
    },
  ],
});
