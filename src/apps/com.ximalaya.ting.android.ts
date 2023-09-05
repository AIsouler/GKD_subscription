import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.ximalaya.ting.android',
  name: '喜马拉雅',
  groups: [
    {
      key: -1,
      name: '开屏广告',
      activityIds: [
        'com.ximalaya.ting.android.host.activity.MainActivity',
        'com.ximalaya.ting.android.host.activity.SplashAdActivity',
      ],
      rules: [
        {
          matches:
            '[id="com.ximalaya.ting.android:id/xm_ad_host_count_down_click_lay"]',
          snapshotUrls: [
            'https://gkd-kit.gitee.io/import/12506207',
            'https://gkd-kit.gitee.io/import/12506273',
          ],
        },
      ],
    },
    {
      key: 0,
      name: '首页右侧浮动广告',
      activityIds: 'com.ximalaya.ting.android.host.activity.MainActivity',
      rules: '[id="com.ximalaya.ting.android:id/main_ad_broadside_close_real"]',
      snapshotUrls: [
        'https://gkd-kit.gitee.io/import/38517192/45664dfb-b8e6-4bdb-b5bb-9852c7a86a2f',
      ],
    },
    {
      key: 1,
      name: '播放页面-暂停按钮下面的广告',
      activityIds: 'com.ximalaya.ting.android.host.activity.MainActivity',
      rules: '[id="com.ximalaya.ting.android:id/x_play_ad_banner_close_real"]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/12506218',
    },
    {
      key: 2,
      name: '播放页面-底部推荐列表-夹杂广告',
      desc: '点击关闭-点击屏蔽',
      rules: [
        {
          activityIds: 'com.ximalaya.ting.android.main.dialog',
          matches: '@[clickable=true] > [text="屏蔽"] + [text="关闭当前广告"]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12506269',
        },
        {
          activityIds: 'com.ximalaya.ting.android.host.activity.MainActivity',
          matches: '[id="com.ximalaya.ting.android:id/main_close"]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12506225',
        },
      ],
    },
    {
      key: 3,
      name: '播放页面-播放前广告',
      activityIds: [
        'com.ximalaya.ting.android.host.activity.MainActivity',
        'com.ximalaya.ting.android.framework.view.dialog',
      ],
      rules: '[id="com.ximalaya.ting.android:id/main_play_ad_close_real"]',
      snapshotUrls: [
        'https://gkd-kit.gitee.io/import/12506250',
        'https://gkd-kit.gitee.io/import/12520626',
      ],
    },
    {
      key: 4,
      name: '首页-推荐列表广告',
      desc: '点击关闭-点击屏蔽',
      rules: [
        {
          activityIds:
            'com.ximalaya.ting.android.adsdk.view.DislikeDialog.DislikeBottomDialog',
          matches:
            '[id="com.ximalaya.ting.android:id/xm_ad_main_ad_dislike_shield"]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12506258',
        },
        {
          activityIds: 'com.ximalaya.ting.android.host.activity.MainActivity',
          matches: '[id="com.ximalaya.ting.android:id/xm_ad_close_real"]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12506253',
        },
      ],
    },
    {
      key: 5,
      name: '关闭热播推荐广告',
      activityIds: 'com.ximalaya.ting.android.host.activity.MainActivity',
      rules: [
        {
          matches: '[text="热播推荐"] + ImageView + ImageView',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12506270',
          // 点击后出现 com.ximalaya.ting.android.main.dialog 弹窗
        },
      ],
    },
    {
      key: 6,
      name: '关闭更新弹窗',
      rules: '[id="com.ximalaya.ting.android:id/host_tv_update_later"]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/12506287',
    },
  ],
});
