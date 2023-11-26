import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.apkpure.aegon',
  name: 'APKPure',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches: '[text$="跳过"||text^="Skip"]',
          snapshotUrls: 'https://i.gkd.li/import/13466685',
        },
      ],
    },
    {
      key: 1,
      name: '热门推荐关闭',
      desc: '关闭应用推广',
      rules: [
        {
          activityIds: 'com.apkpure.aegon.main.activity.MainTabActivity',
          matches:
            '[text="精选必备好应用"] + [name="android.widget.RelativeLayout"] > [name="android.widget.ImageView"]',
          snapshotUrls: 'https://i.gkd.li/import/13466647',
        },
      ],
    },
    {
      enable: false,
      key: 2,
      name: '更新与已安装界面-查看更多',
      desc: '在更新界面自动点击查看更多按钮，展开所有应用',
      rules: [
        {
          activityIds: [
            'com.apkpure.aegon.main.activity.MainTabActivity',
            'com.apkpure.aegon.main.activity.AppManagerActivity',
            'com.apkpure.aegon.cms.activity.CommonActivity',
            'com.apkpure.aegon.main.activity.AppMoreActivity',
          ],
          matches: 'ViewGroup > [text="查看更多"]',
          snapshotUrls: 'https://i.gkd.li/import/13466329',
        },
      ],
    },
    {
      enable: false,
      key: 3,
      name: '更新界面-软件推荐',
      activityIds: [
        'com.apkpure.aegon.main.activity.MainTabActivity',
        'com.apkpure.aegon.main.activity.AppManagerActivity',
        'com.apkpure.aegon.cms.activity.CommonActivity',
        'com.apkpure.aegon.main.activity.AppMoreActivity',
      ],
      quickFind: true,
      rules: [
        {
          name: '点击三点图标',
          key: 0,
          matches: '@ImageView - RelativeLayout >3 [text="AD"]',
          snapshotUrls: 'https://i.gkd.li/import/13466329',
        },
        {
          name: '点击关闭',
          preKeys: 0,
          matches: 'TextView[text="关闭"]',
          snapshotUrls: 'https://i.gkd.li/import/13466610',
        },
      ],
    },
  ],
});
