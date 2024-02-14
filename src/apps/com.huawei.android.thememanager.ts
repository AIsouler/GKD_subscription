import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.huawei.android.thememanager',
  name: '华为主题',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches: '[text^="跳过"][text.length<=10]',
          action: 'clickCenter',
          snapshotUrls: [
            'https://i.gkd.li/import/12657379',
            'https://i.gkd.li/import/13069736',
            'https://i.gkd.li/import/13762181',
          ],
        },
      ],
    },
    {
      key: 1,
      name: '局部广告-主题详情页“下应用领主题”横幅',
      activityIds: [
        'com.huawei.android.thememanager.mvp.view.activity.onlinetheme.OnlineThemePreviewActivity',
        'com.huawei.android.thememanager.mvp.view.activity.onlinewallpaper.OnlineWallpaperPreviewActivity',
        'com.huawei.android.thememanager.mvp.view.activity.onlinefont.OnlineFontPreviewActivity',
        'com.huawei.android.thememanager.mvp.view.activity.paster.PasterDetailActivity',
        'com.huawei.android.thememanager.mvp.view.activity.onlinetheme.LocalThemePreviewActivity',
      ],
      rules: [
        {
          matches: '[id="com.huawei.android.thememanager:id/iv_vip_close"]',
          snapshotUrls: 'https://i.gkd.li/import/12647175',
        },
      ],
    },
    {
      key: 2,
      name: '局部广告-主题详情页广告',
      activityIds: [
        'com.huawei.android.thememanager.mvp.view.activity.onlinetheme.OnlineThemePreviewActivity',
        'com.huawei.android.thememanager.mvp.view.activity.onlinewallpaper.OnlineWallpaperPreviewActivity',
        'com.huawei.android.thememanager.mvp.view.activity.onlinefont.OnlineFontPreviewActivity',
        'com.huawei.android.thememanager.mvp.view.activity.paster.PasterDetailActivity',
        'com.huawei.android.thememanager.mvp.view.activity.onlinetheme.LocalThemePreviewActivity',
      ],
      rules: [
        {
          matches:
            '[id="com.huawei.hms.ads.uiengine:id/unlike_iv"||id="com.huawei.android.thememanager:id/download_pps_close"||id="com.huawei.android.thememanager:id/pps_close"]',
          snapshotUrls: [
            'https://i.gkd.li/import/12647248',
            'https://i.gkd.li/import/12647292',
            'https://i.gkd.li/import/12647367',
          ],
        },
      ],
    },
    {
      key: 3,
      name: '局部广告-主题详情页广告关闭弹窗',
      activityIds: ['com.huawei.openalliance.ad.activity.FeedbackActivity'],
      rules: [
        {
          matches: '[text="直接关闭"]',
          snapshotUrls: 'https://i.gkd.li/import/12647268',
        },
      ],
    },
    {
      key: 4,
      name: '分段广告-主题详情信息流广告',
      activityIds: [
        'com.huawei.android.thememanager.mvp.view.activity.onlinetheme.OnlineThemePreviewActivity',
        'com.huawei.android.thememanager.mvp.view.activity.onlinewallpaper.OnlineWallpaperPreviewActivity',
        'com.huawei.android.thememanager.mvp.view.activity.onlinefont.OnlineFontPreviewActivity',
        'com.huawei.android.thememanager.mvp.view.activity.paster.PasterDetailActivity',
        'com.huawei.android.thememanager.mvp.view.activity.onlinetheme.LocalThemePreviewActivity',
      ],
      rules: [
        {
          matches:
            '[id="com.huawei.android.thememanager:id/pps_lable_top"||id="com.huawei.android.thememanager:id/pps_img_video_close"]',
          snapshotUrls: [
            'https://i.gkd.li/import/12647311',
            'https://i.gkd.li/import/12647346',
          ],
        },
        {
          matches:
            '[id="com.huawei.android.thememanager:id/tv_btn_uninterested"]',
          snapshotUrls: 'https://i.gkd.li/import/12647326',
        },
      ],
    },
    {
      key: 5,
      name: '局部广告-分类页“免费领取”',
      activityIds: ['com.huawei.android.thememanager.HwThemeManagerActivity'],
      rules: [
        {
          matches: '[id="com.huawei.android.thememanager:id/rl_ad_close"]',
          snapshotUrls: 'https://i.gkd.li/import/12647393',
        },
      ],
    },
    {
      key: 6,
      name: '分段广告-主页面（推荐、分类、我的）广告',
      activityIds: ['com.huawei.android.thememanager.HwThemeManagerActivity'],
      rules: [
        {
          matches:
            '[id="com.huawei.android.thememanager:id/announce_ad_close_btn"||id="com.huawei.android.thememanager:id/pps_lable_top"||id="com.huawei.android.thememanager:id/pps_img_video_close"||id="com.huawei.android.thememanager:id/pps_label_ll"]',
          snapshotUrls: [
            'https://i.gkd.li/import/12647614',
            'https://i.gkd.li/import/12647653',
            'https://i.gkd.li/import/12647650',
            'https://i.gkd.li/import/12657822',
          ],
        },
        {
          matches:
            '[id="com.huawei.android.thememanager:id/tv_btn_uninterested"]',
          snapshotUrls: 'https://i.gkd.li/import/12647655',
        },
      ],
    },
    {
      key: 7,
      name: '全屏广告-首页活动弹窗',
      enable: false,
      activityIds: [
        'com.huawei.android.thememanager.HwThemeManagerActivity',
        'com.huawei.android.launcher.unihome.UniHomeLauncher',
      ],
      rules: [
        {
          matches:
            '[id="com.huawei.android.thememanager:id/campaign_dialog_close_image"]',
          snapshotUrls: [
            'https://i.gkd.li/import/12657939',
            'https://i.gkd.li/import/12667815',
          ],
        },
      ],
    },
    {
      key: 8,
      name: '更新提示',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '@[text="以后再说"] + [text="立即更新"]',
      snapshotUrls: 'https://i.gkd.li/import/12727318',
    },
    {
      key: 9,
      name: '通知提示-请求通知权限弹窗',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '@[text="取消"] < * - * >n [text="开启消息通知"]',
      snapshotUrls: 'https://i.gkd.li/import/12918192',
    },
  ],
});
