import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.ximalaya.ting.android',
  name: '喜马拉雅',
  groups: [
    {
      key: -1,
      name: '开屏广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches: '[text*="跳过"][text.length<10][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/7ef0b1fb-aaa0-475d-b6b4-e927776adb27',
          snapshotUrls: 'https://i.gkd.li/i/17068586',
        },
      ],
    },
    {
      key: 0,
      name: '局部广告-首页右侧浮动广告',
      fastQuery: true,
      activityIds: 'com.ximalaya.ting.android.host.activity.MainActivity',
      rules: '[id="com.ximalaya.ting.android:id/main_ad_broadside_close_real"]',
      snapshotUrls: ['https://i.gkd.li/i/12472620'],
    },
    {
      key: 1,
      name: '局部广告-播放页面-播放控制区域的广告',
      fastQuery: true,
      activityIds: 'com.ximalaya.ting.android.host.activity.MainActivity',
      rules: [
        {
          key: 0,
          name: '暂停按钮下方的广告',
          matches:
            '[id="com.ximalaya.ting.android:id/x_play_ad_banner_close_real"]',
          snapshotUrls: 'https://i.gkd.li/i/12506218',
        },
        {
          key: 1,
          name: '喜马小游戏广告',
          matches: '[id="com.ximalaya.ting.android:id/host_game_close_tv"]',
          snapshotUrls: 'https://i.gkd.li/i/12927110',
        },
        {
          key: 2,
          name: '体验会员广告',
          matches: '[id="com.ximalaya.ting.android:id/main_iv_close"]',
          exampleUrls:
            'https://m.gkd.li/6328439/ea870e6f-07c9-4167-ab62-03e52838110b',
          snapshotUrls: 'https://i.gkd.li/i/13546642',
        },
      ],
    },
    {
      key: 2,
      name: '局部广告-播放页面-底部推荐列表-夹杂广告',
      desc: '点击关闭-点击屏蔽',
      fastQuery: true,
      rules: [
        {
          activityIds: [
            'com.ximalaya.ting.android.main.dialog',
            'com.ximalaya.ting.android.host.activity.MainActivity',
          ],
          matches: '@[clickable=true] > [text="屏蔽"] + [text="关闭当前广告"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12506269',
            'https://i.gkd.li/i/13296565', //com.ximalaya.ting.android.host.activity.MainActivity
          ],
        },
        {
          activityIds: 'com.ximalaya.ting.android.host.activity.MainActivity',
          matches:
            '@[id="com.ximalaya.ting.android:id/main_close_layout"][visibleToUser=true] > [id="com.ximalaya.ting.android:id/main_mark_text"][text="广告"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12506225',
            'https://i.gkd.li/i/12701414', // 关闭广告后，控件仍然存在但不可见，使用 visibleToUser=true 进行限定，防止关闭之后继续触发规则
            'https://i.gkd.li/i/13314183', // 原规则clickable=false容易误触"橱窗"'[id="com.ximalaya.ting.android:id/main_mark_text"] + [id="com.ximalaya.ting.android:id/main_close"][visibleToUser=true]',
          ],
        },
      ],
    },
    {
      key: 3,
      name: '局部广告-播放页面-播放前广告',
      fastQuery: true,
      activityIds: [
        'com.ximalaya.ting.android.host.activity.MainActivity',
        'com.ximalaya.ting.android.framework.view.dialog',
      ],
      rules: '[id="com.ximalaya.ting.android:id/main_play_ad_close_real"]',
      snapshotUrls: [
        'https://i.gkd.li/i/12506250',
        'https://i.gkd.li/i/12520626',
      ],
    },
    {
      key: 4,
      name: '分段广告-首页-推荐列表广告',
      desc: '点击关闭-点击屏蔽',
      activityIds: [
        'com.ximalaya.ting.android.host.activity.MainActivity',
        'com.ximalaya.ting.android.adsdk.view.DislikeDialog.DislikeBottomDialog',
      ],
      rules: [
        {
          key: 0,
          fastQuery: true,
          matches: '[id="com.ximalaya.ting.android:id/xm_ad_close_real"]',
          snapshotUrls: 'https://i.gkd.li/i/12506253',
        },
        {
          key: 1,
          matches:
            '[id="com.ximalaya.ting.android:id/main_ad_dynamic_lay"] >(4) ImageView + ImageView',
          snapshotUrls: 'https://i.gkd.li/i/12701374',
        },
        {
          preKeys: [0, 1],
          name: '点击关闭原因"屏蔽"',
          fastQuery: true,
          matches:
            '@[name="android.widget.RelativeLayout" || name="android.widget.LinearLayout"] > [text="屏蔽"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12506258',
            'https://i.gkd.li/i/13260487',
            'https://i.gkd.li/i/13275928', //没有id
          ],
        },
      ],
    },
    {
      key: 5,
      name: '局部广告-热播推荐广告',
      activityIds: 'com.ximalaya.ting.android.host.activity.MainActivity',
      rules: [
        {
          matches: '[text="热播推荐"] + ImageView + ImageView',
          snapshotUrls: 'https://i.gkd.li/i/12506270',
          // 点击后出现 com.ximalaya.ting.android.main.dialog 弹窗
        },
      ],
    },
    {
      key: 6,
      name: '更新提示',
      desc: '点击关闭',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: '[id="com.ximalaya.ting.android:id/host_tv_update_later"]',
      snapshotUrls: 'https://i.gkd.li/i/12506287',
    },
    {
      key: 7,
      name: '青少年模式',
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      snapshotUrls: 'https://i.gkd.li/i/12506209',
      rules: {
        matches: [
          '[text*="青少年模式"][id="com.ximalaya.ting.android:id/host_btn_set"]',
          '[id="com.ximalaya.ting.android:id/host_dialog_close"]',
        ],
      },
    },
    {
      key: 8,
      name: '局部广告-评论区广告',
      activityIds: 'com.ximalaya.ting.android.host.activity.MainActivity',
      fastQuery: true,
      rules:
        '[id="com.ximalaya.ting.android:id/main_ad_close_real"][visibleToUser=true]',
      snapshotUrls: 'https://i.gkd.li/i/12869426',
    },
    {
      key: 9,
      name: '分段广告-卡片广告',
      fastQuery: true,
      rules: [
        {
          key: 0,
          name: '我的页面-点击卡片右上角关闭按钮',
          activityIds: 'com.ximalaya.ting.android.host.activity.MainActivity',
          matches:
            '[id="com.ximalaya.ting.android:id/main_close_layout"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/13194838',
            'https://i.gkd.li/i/13296565', // [visibleToUser=true]
          ],
        },
        {
          preKeys: 0,
          key: 1,
          name: '我的页面-点击不感兴趣',
          activityIds:
            'com.ximalaya.ting.android.adsdk.view.DislikeDialog.DislikeBottomDialog',
          matches:
            '[id="com.ximalaya.ting.android:id/xm_ad_main_ad_dislike_un_interest"]',
          snapshotUrls: 'https://i.gkd.li/i/13194839',
        },
        {
          key: 2,
          name: '有声书分类页面-点击卡片右上角关闭按钮',
          activityIds:
            'com.ximalaya.ting.android.host.activity.SplashAdActivity',
          matches: '[id="com.ximalaya.ting.android:id/main_iv_dislike"]',
          snapshotUrls: 'https://i.gkd.li/i/13334685',
        },
      ],
    },
    {
      key: 10,
      name: '全屏广告-首页-专辑订阅推荐弹窗',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: 'com.ximalaya.ting.android.host.activity.MainActivity',
      rules:
        '[text="你可能感兴趣的专辑"] + [id="com.ximalaya.ting.android:id/main_iv_close"]',
      snapshotUrls: 'https://i.gkd.li/i/13251713',
    },
    {
      key: 11,
      name: '全屏广告-弹窗广告',
      fastQuery: true,
      activityIds: 'com.ximalaya.ting.android.host.activity.MainActivity',
      rules:
        '@[id="com.ximalaya.ting.android:id/host_close_firework"] +2 [id="com.ximalaya.ting.android:id/host_firework_ad_tag"]',
      snapshotUrls: 'https://i.gkd.li/i/13263421',
    },
    {
      key: 12,
      name: '权限提示-通知权限',
      desc: '取消推送通知',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches: '[id="com.ximalaya.ting.android:id/cancel_btn"]',
          exampleUrls:
            'https://m.gkd.li/33366298/f6ac028a-509b-49d8-959a-7da90fb4d9df',
          snapshotUrls: 'https://i.gkd.li/i/13389145',
        },
      ],
    },
  ],
});
