import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.dep.biguo',
  name: '自考笔果题库',
  groups: [
    {
      key: 1,
      name: '更新提示',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.dialog',
          matches: '@[text="取消"] +2 [text="立即更新"]',
          snapshotUrls: 'https://i.gkd.li/i/12708751',
        },
      ],
    },
    {
      key: 2,
      name: '全屏广告-首页弹窗广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'com.dep.biguo.dialog',
          matches:
            '[id="com.dep.biguo:id/imageView"] + [id="com.dep.biguo:id/closeView"]',
          snapshotUrls: 'https://i.gkd.li/i/12708756',
        },
      ],
    },
    {
      key: 10,
      name: '权限提示-定位权限',
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'com.dep.biguo.mvp.ui.activity.MainActivity',
          matches: '[text*="定位权限"] +2 [text="拒绝"]',
          snapshotUrls: 'https://i.gkd.li/i/12708770',
        },
      ],
    },
  ],
});
