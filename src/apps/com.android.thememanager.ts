import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.android.thememanager',
  name: '主题壁纸',
  groups: [
    {
      key: 1,
      name: '分段广告-信息流广告',
      desc: '该广告的第二段需开启[智能服务]的对应规则才能关闭',
      fastQuery: true,
      rules: [
        {
          activityIds: [
            '.ThemeResourceProxyTabActivity',
            '.module.detail.view.ThemeDetailActivity',
            '.v9.WallpaperSubjectActivity',
          ],
          matches: '[vid="ad_close_btn"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/17143445',
            'https://i.gkd.li/i/17143447',
            'https://i.gkd.li/i/17675601',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '全屏广告-弹窗广告',
      fastQuery: true,
      activityIds: [
        'com.android.thememanager.ThemeResourceTabActivity',
        'com.android.thememanager.ThemeResourceProxyTabActivity',
      ],
      rules: 'ImageView[id="com.android.thememanager:id/cancel"][desc="关闭"]',
      snapshotUrls: [
        'https://i.gkd.li/i/13215038',
        'https://i.gkd.li/i/15286330',
      ],
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
          fastQuery: true,
          activityIds: [
            'com.android.thememanager.ThemeResourceTabActivity',
            'com.android.thememanager.ThemeResourceProxyTabActivity',
          ],
          matches: '[vid="close"]',
          exampleUrls:
            'https://m.gkd.li/57941037/41ff6d56-e583-4e6e-9fb3-4efafaeedbd5',
          snapshotUrls: [
            'https://i.gkd.li/i/14722559',
            'https://i.gkd.li/i/15286334',
          ],
        },
      ],
    },
  ],
});
