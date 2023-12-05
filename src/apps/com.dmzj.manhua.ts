import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.dmzj.manhua',
  name: '动漫之家',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      actionMaximum: 1,
      resetMatch: 'app',
      matchTime: 10000,
      rules: '[text*="跳过"][text.length<=5]',
      snapshotUrls: 'https://i.gkd.li/import/13542494',
    },
    {
      key: 1,
      name: '弹窗广告',
      activityIds: 'com.dmzj.manhua.ui.LaunchInterceptorActivity',
      quickFind: true,
      actionMaximum: 1,
      resetMatch: 'activity',
      matchTime: 10000,
      rules: '[id="com.dmzj.manhua:id/iv_close"]',
      snapshotUrls: 'https://i.gkd.li/import/13542503',
    },
    {
      key: 2,
      name: '主页-浮窗',
      desc: '浮窗-您想运行会员系统吗？',
      activityIds: 'com.dmzj.manhua.ui.home.HomeTabsActivitys',
      quickFind: true,
      actionMaximum: 1,
      resetMatch: 'activity',
      matchTime: 10000,
      rules:
        '@[id="com.dmzj.manhua:id/ivAdClose"] - [id="com.dmzj.manhua:id/ivFloatAd"]',
      snapshotUrls: 'https://i.gkd.li/import/13542506',
    },
  ],
});
