import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.miui.systemAdSolution',
  name: 'miui系统广告',
  groups: [
    {
      key: 0,
      name: '任意app开屏广告',
      desc: '此广告组件可以使用ADB卸载',
      rules: '[id=`com.miui.systemAdSolution:id/view_skip_button`]',
    },
    {
      key: 1,
      name: 'miui-为什么不希望看到这条推广',
      desc: '点击【不感兴趣】',
      activityIds: [
        'com.xiaomi.ad.feedback',
        'com.android.thememanager.module.detail.view.ThemeDetailActivity',
        'com.android.thememanager.ThemeResourceProxyTabActivity',
      ],
      rules: '[id="com.miui.systemAdSolution:id/no_interest"]',
      snapshotUrls: [
        'https://i.gkd.li/import/13227328', // com.android.thememanager.module.detail.view.ThemeDetailActivity
        'https://i.gkd.li/import/13255751', // com.android.thememanager.ThemeResourceProxyTabActivity
      ],
    },
  ],
});
