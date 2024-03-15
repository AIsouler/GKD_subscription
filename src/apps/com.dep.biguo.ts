import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.dep.biguo',
  name: '自考笔果题库',
  groups: [
    {
      key: 1,
      name: '更新提示',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '@[text="取消"] +2 [text="立即更新"]',
      snapshotUrls: 'https://i.gkd.li/i/12708751',
    },
    {
      key: 2,
      name: '全屏广告-首页弹窗广告',
      activityIds: 'com.dep.biguo.dialog',
      rules:
        '[id="com.dep.biguo:id/imageView"] + [id="com.dep.biguo:id/closeView"]',
      snapshotUrls: 'https://i.gkd.li/i/12708756',
    },
    {
      key: 10,
      name: '定位提示-请求定位权限弹窗',
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: 'com.dep.biguo.mvp.ui.activity.MainActivity',
      rules: '[text*="定位权限"] +2 [text="拒绝"]',
      snapshotUrls: 'https://i.gkd.li/i/12708770',
    },
  ],
});
