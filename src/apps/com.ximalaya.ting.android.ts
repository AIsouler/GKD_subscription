import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.ximalaya.ting.android',
  name: '喜马拉雅',
  groups: [
    {
      key: 1,
      name: '局部广告-播放页广告',
      rules: [
        {
          key: 3,
          fastQuery: true,
          activityIds: '.host.activity.MainActivity',
          matches:
            '@[visibleToUser=true] < ViewGroup[childCount=1] - ViewGroup[childCount=6] > [text="广告"] ',
          exampleUrls: 'https://e.gkd.li/bbf93e2c-08b8-4155-b82c-89a629a62737',
          snapshotUrls: 'https://i.gkd.li/i/18500523',
        },
        {
          key: 4,
          fastQuery: true,
          activityIds: '.host.activity.MainActivity',
          matches:
            '[vid="main_buy_view_yellow_zone_btn_close" || vid="main_play_ad_close_real"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/bf820eed-00ad-47a0-9581-8cdb3d76bde5',
          snapshotUrls: [
            'https://i.gkd.li/i/18683999',
            'https://i.gkd.li/i/24330967',
          ],
        },
      ],
    },
    {
      key: 4,
      name: '分段广告-信息流广告',
      desc: '点击关闭-点击屏蔽',
      fastQuery: true,
      activityIds: [
        '.host.activity.MainActivity',
        '.adsdk.view.DislikeDialog.DislikeBottomDialog',
      ],
      rules: [
        {
          key: 0,
          matches:
            '[vid="xm_ad_close_real" || vid="main_close_layout"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/17112326',
            'https://i.gkd.li/i/17112313',
          ],
        },
        {
          preKeys: [0],
          matches:
            '@[clickable=true] > [text="屏蔽" || text="直接关闭" || text="不喜欢此内容"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13260487',
            'https://i.gkd.li/i/13275928',
            'https://i.gkd.li/i/17111444',
            'https://i.gkd.li/i/17111452',
            'https://i.gkd.li/i/24589005',
          ],
        },
      ],
    },
    {
      key: 7,
      name: '青少年模式',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.host.activity.MainActivity',
          matches: [
            '[text*="青少年模式"][id="com.ximalaya.ting.android:id/host_btn_set"]',
            '[id="com.ximalaya.ting.android:id/host_dialog_close"]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/12506209',
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
      rules: [
        {
          activityIds: 'com.ximalaya.ting.android.host.activity.MainActivity',
          matches:
            '[text="你可能感兴趣的专辑"] + [id="com.ximalaya.ting.android:id/main_iv_close"]',
          snapshotUrls: 'https://i.gkd.li/i/13251713',
        },
      ],
    },
    {
      key: 11,
      name: '全屏广告-弹窗广告',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.ximalaya.ting.android.host.activity.MainActivity',
          matches:
            '@[id="com.ximalaya.ting.android:id/host_close_firework"] +2 [id="com.ximalaya.ting.android:id/host_firework_ad_tag"]',
          snapshotUrls: 'https://i.gkd.li/i/13263421',
        },
      ],
    },
    {
      key: 12,
      name: '权限提示-通知权限',
      desc: '取消推送通知',
      fastQuery: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.host.activity.MainActivity',
          matches: [
            '[text*="通知权限"][visibleToUser=true]',
            '[text="取消" || text="暂不开启"][visibleToUser=true]',
          ],
          exampleUrls: 'https://e.gkd.li/ab40c096-d024-4b7c-9c6f-245beafd373a',
          snapshotUrls: [
            'https://i.gkd.li/i/13389145',
            'https://i.gkd.li/i/18391977',
            'https://i.gkd.li/i/20499323',
          ],
        },
      ],
    },
    {
      key: 13,
      name: '全屏广告-免流提示',
      desc: '关闭[开免流送会员]弹窗',
      rules: [
        {
          fastQuery: true,
          activityIds: '.host.activity.MainActivity',
          matches: '[vid="host_iv_close"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/2a7e189b-b935-4bbd-9672-c18f2bf454e9',
          snapshotUrls: 'https://i.gkd.li/i/18326083',
        },
      ],
    },
  ],
});
