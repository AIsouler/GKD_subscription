import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.dmzj.manhua',
  name: '动漫之家',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      activityIds: 'com.dmzj.manhua.ui.LaunchInterceptorActivity',
      quickFind: true,
      actionMaximum: 1,
      resetMatch: 'activity',
      matchTime: 10000,
      rules: '[id="com.dmzj.manhua:id/iv_close"]',
      snapshotUrls: 'https://i.gkd.li/i/13542503',
    },
    {
      key: 2,
      name: '局部广告-主页"您想运行会员系统吗"弹窗',
      desc: '点击取消',
      activityIds: 'com.dmzj.manhua.ui.home.HomeTabsActivitys',
      quickFind: true,
      actionMaximum: 1,
      resetMatch: 'activity',
      matchTime: 10000,
      rules:
        '@[id="com.dmzj.manhua:id/ivAdClose"] - [id="com.dmzj.manhua:id/ivFloatAd"]',
      snapshotUrls: 'https://i.gkd.li/i/13542506',
    },
  ],
});
