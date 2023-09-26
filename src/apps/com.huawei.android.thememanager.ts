import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.huawei.android.thememanager',
  name: '华为主题',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: [
        'com.huawei.android.thememanager.mvp.view.activity.onlinebase.PageActivity',
      ],
      rules: [
        {
          matches: '[id="com.huawei.hms.ads.uiengine:id/hiad_skip_text"]',
          action: 'clickCenter',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12657379',
        },
      ],
    },
    {
      key: 1,
      name: '主题详情页“下应用领主题”横幅',
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
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12647175',
        },
      ],
    },
    {
      key: 2,
      name: '主题详情页广告',
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
            'https://gkd-kit.gitee.io/import/12647248',
            'https://gkd-kit.gitee.io/import/12647292',
            'https://gkd-kit.gitee.io/import/12647367',
          ],
        },
      ],
    },
    {
      key: 3,
      name: '主题详情页广告关闭弹窗',
      activityIds: ['com.huawei.openalliance.ad.activity.FeedbackActivity'],
      rules: [
        {
          matches: '[text="直接关闭"]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12647268',
        },
      ],
    },
    {
      key: 4,
      name: '主题详情信息流广告',
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
            'https://gkd-kit.gitee.io/import/12647311',
            'https://gkd-kit.gitee.io/import/12647346',
          ],
        },
        {
          matches:
            '[id="com.huawei.android.thememanager:id/tv_btn_uninterested"]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12647326',
        },
      ],
    },
    {
      key: 5,
      name: '分类页“免费领取”',
      activityIds: ['com.huawei.android.thememanager.HwThemeManagerActivity'],
      rules: [
        {
          matches: '[id="com.huawei.android.thememanager:id/rl_ad_close"]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12647393',
        },
      ],
    },
    {
      key: 6,
      name: '主页面（推荐、分类、我的）广告',
      activityIds: ['com.huawei.android.thememanager.HwThemeManagerActivity'],
      rules: [
        {
          matches:
            '[id="com.huawei.android.thememanager:id/announce_ad_close_btn"||id="com.huawei.android.thememanager:id/pps_lable_top"||id="com.huawei.android.thememanager:id/pps_img_video_close"||id="com.huawei.android.thememanager:id/pps_label_ll"]',
          snapshotUrls: [
            'https://gkd-kit.gitee.io/import/12647614',
            'https://gkd-kit.gitee.io/import/12647653',
            'https://gkd-kit.gitee.io/import/12647650',
            'https://gkd-kit.gitee.io/import/12657822',
          ],
        },
        {
          matches:
            '[id="com.huawei.android.thememanager:id/tv_btn_uninterested"]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12647655',
        },
      ],
    },
    {
      key: 7,
      name: '首页活动弹窗-默认禁用',
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
            'https://gkd-kit.gitee.io/import/12657939',
            'https://gkd-kit.gitee.io/import/12667815',
          ],
        },
      ],
    },
    {
      key: 8,
      name: '更新弹窗',
      activityIds: 'com.huawei.android.launcher.unihome.UniHomeLauncher',
      rules: '@[text="以后再说"] + [text="立即更新"]',
      snapshotUrls: 'https://gkd-kit.songe.li/import/12727318',
    },
  ],
});
