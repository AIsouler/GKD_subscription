import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.baidu.baike',
  name: '百度百科',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.baidu.baike.activity.SplashActivity',
      rules: '[id="com.baidu.baike:id/btn_skip"]',
      snapshotUrls: 'https://i.gkd.li/import/12755714',
    },
    {
      key: 10,
      name: '请求通知权限弹窗',
      desc: '自动点击【不允许】',
      activityIds: 'com.baidu.baike.component.push.NotificationEnableDialog',
      rules: '[text^="打开推送通知"] +2 [text="不允许"]',
      snapshotUrls: 'https://i.gkd.li/import/12755717',
    },
  ],
});
