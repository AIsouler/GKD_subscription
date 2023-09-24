import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.dep.biguo',
  name: '自考笔果题库',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.dep.biguo.mvp.ui.activity.SplashActivity',
      rules: '[id="com.dep.biguo:id/adView"] [text^="跳过"]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/12708763',
    },
    {
      key: 1,
      name: '更新弹窗',
      activityIds: 'com.dep.biguo.dialog',
      rules: '@[text="取消"] +2 [text="立即更新"]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/12708751',
    },
    {
      key: 2,
      name: '首页广告弹窗',
      activityIds: 'com.dep.biguo.dialog',
      rules:
        '[id="com.dep.biguo:id/imageView"] + [id="com.dep.biguo:id/closeView"]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/12708756',
    },
    {
      enable: false,
      key: 10,
      name: '请求定位权限弹窗',
      activityIds: 'com.dep.biguo.mvp.ui.activity.MainActivity',
      rules: '[text*="定位权限"] +2 [text="拒绝"]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/12708770',
    },
  ],
});
