import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.apkpure.aegon',
  name: 'APKPure',
  deprecatedKeys: [0],
  groups: [
    {
      key: 1,
      name: '全屏广告-热门推荐关闭',
      desc: '关闭应用推广',
      rules: [
        {
          activityIds: 'com.apkpure.aegon.main.activity.MainTabActivity',
          matches:
            '[text="精选必备好应用"] + [name="android.widget.RelativeLayout"] > [name="android.widget.ImageView"]',
          snapshotUrls: 'https://i.gkd.li/i/13466647',
        },
      ],
    },
    {
      enable: false,
      key: 2,
      name: '功能类-更新与已安装界面-查看更多',
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
          snapshotUrls: 'https://i.gkd.li/i/13466329',
        },
      ],
    },
    {
      enable: false,
      key: 3,
      name: '分段广告-更新界面软件推荐',
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
          snapshotUrls: 'https://i.gkd.li/i/13466329',
        },
        {
          name: '点击关闭',
          preKeys: 0,
          matches: 'TextView[text="关闭"]',
          snapshotUrls: 'https://i.gkd.li/i/13466610',
        },
      ],
    },
    {
      key: 4,
      name: '功能类-添加桌面快捷方式',
      desc: '下次添加',
      rules: [
        {
          activityIds: 'com.apkpure.aegon.main.activity.MainTabActivity',
          matches: '[id="com.apkpure.aegon:id/arg"][text="下次添加"]',
          snapshotUrls: 'https://i.gkd.li/i/13416401',
        },
      ],
    },
  ],
});
