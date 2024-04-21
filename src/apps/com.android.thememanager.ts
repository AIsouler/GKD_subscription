import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.android.thememanager',
  name: '主题壁纸',
  groups: [
    {
      key: 1,
      name: '局部广告-主题详情底部广告',
      desc: '注意如果使用ADB禁用了MIUI广告组件,点击此按钮会无反应,可关闭此规则,避免过多相同点击记录',
      quickFind: true,
      rules:
        '[id="com.android.thememanager:id/ad_close_btn"][visibleToUser=true]',
      snapshotUrls: 'https://i.gkd.li/i/13227330',
    },
    {
      key: 2,
      name: '全屏广告-弹窗广告',
      quickFind: true,
      activityIds: 'com.android.thememanager.ThemeResourceTabActivity',
      rules: 'ImageView[id="com.android.thememanager:id/cancel"][desc="关闭"]',
      snapshotUrls: 'https://i.gkd.li/i/13215038',
    },
    {
      key: 3,
      name: '局部广告-右下角悬浮窗广告',
      desc: '点击关闭',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          quickFind: true,
          activityIds: 'com.android.thememanager.ThemeResourceTabActivity',
          matches: '[vid="close"]',
          exampleUrls:
            'https://m.gkd.li/57941037/41ff6d56-e583-4e6e-9fb3-4efafaeedbd5',
          snapshotUrls: 'https://i.gkd.li/i/14722559',
        },
      ],
    },
  ],
});
