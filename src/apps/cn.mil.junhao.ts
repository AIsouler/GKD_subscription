import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'cn.mil.junhao',
  name: '中国军号',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: '[vid="splash_adv_ship"]',
      snapshotUrls: 'https://i.gkd.li/i/13806892',
    },
    {
      key: 1,
      name: '功能类-首页右侧浮窗',
      activityIds: 'com.mediacloud.app.nav2.AppHome21Style',
      rules:
        '[vid="fragment_containerx"] > FrameLayout > ImageView[index=2][clickable=true]',
      snapshotUrls: 'https://i.gkd.li/i/13806894',
    },
    {
      key: 2,
      name: '功能类-意见反馈浮窗',
      activityIds: 'com.mediacloud.app.nav2.AppHome21Style',
      rules: '[vid="float_feedback"] > ImageView[index=2][clickable=true]',
      snapshotUrls: 'https://i.gkd.li/i/13806896',
    },
  ],
});
