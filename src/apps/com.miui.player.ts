import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.miui.player',
  name: '小米音乐',
  groups: [
    {
      key: 1,
      name: '局部广告-浮窗广告',
      desc: '关闭右侧飘窗广告',
      fastQuery: true,
      activityIds:
        'com.tencent.qqmusiclite.activity.player.MusicPlayerActivity',
      rules:
        '[id="com.miui.player:id/free_mode_tips_layout"] + [id="com.miui.player:id/iv_close"]',
      snapshotUrls: 'https://i.gkd.li/i/13303283',
    },
    {
      key: 2,
      name: '局部广告-横幅广告',
      desc: '关闭播放页面横幅广告',
      fastQuery: true,
      activityIds:
        'com.tencent.qqmusiclite.activity.player.MusicPlayerActivity',
      rules: [
        {
          key: 0,
          matches: '[id="com.miui.player:id/ad_skip_text"][text="关闭"]',
          exampleUrls:
            'https://m.gkd.li/57941037/d923ba1b-3098-49b0-8593-c84dbaa16612',
          snapshotUrls: [
            'https://i.gkd.li/i/13304347', // 倒计时
            'https://i.gkd.li/i/13304344', // 可关闭
          ],
        },
        {
          key: 1,
          matches: '[text="广告｜跳过"]', // 不使用vid="ad_skip_text"，避免和key 0冲突
          exampleUrls:
            'https://m.gkd.li/57941037/2ae1ca24-fb50-48ff-9343-e5607b512127',
          snapshotUrls: 'https://i.gkd.li/i/14711960',
        },
      ],
    },
    {
      key: 3,
      name: '全屏广告-看广告免费听弹窗',
      activityIds: 'com.tencent.qqmusiccommon.hybrid.HybridViewActivity',
      rules: 'ViewGroup > @ViewGroup + ViewGroup[childCount=5]',
      snapshotUrls: ['https://i.gkd.li/i/13304343'],
    },
    {
      key: 4,
      name: '局部广告-首页右侧悬浮卡片',
      activityIds: 'com.tencent.qqmusiclite.activity.MainActivity',
      fastQuery: true,
      rules:
        '[id="com.miui.player:id/cl_floating_promote"] > [id="com.miui.player:id/iv_close"]',
      snapshotUrls: ['https://i.gkd.li/i/13562649'],
    },
    {
      key: 5,
      name: '功能类-年度报告邀请函弹窗',
      desc: '点击关闭',
      activityIds: 'com.tencent.qqmusiclite.activity.MainActivity',
      fastQuery: true,
      rules: '[id="com.miui.player:id/iv_close_dialog_button"]',
      snapshotUrls: ['https://i.gkd.li/i/13623503'],
    },
    {
      key: 10,
      name: '全屏广告-会员过期续费弹窗',
      activityIds: 'com.tencent.qqmusiccommon.hybrid.HybridViewActivity',
      rules: '[id=null][desc="关闭弹框按钮"][clickable=true]',
      snapshotUrls: 'https://i.gkd.li/i/12700955',
    },
    {
      key: 11,
      name: '局部广告-"我的"页面顶部卡片广告',
      activityIds: 'com.tencent.qqmusiclite.activity.MainActivity',
      rules:
        '[id="com.miui.player:id/banner_image"] + [id="com.miui.player:id/close_banner"]',
      snapshotUrls: 'https://i.gkd.li/i/12700984',
    },
    {
      key: 12,
      name: '功能类-看广告视频领VIP',
      desc: '等待15s自动点击"退出"',
      rules: [
        {
          actionDelay: 15000,
          fastQuery: true,
          activityIds: 'com.tencentmusic.ad.tmead.reward.TMERewardActivity',
          matches: '[id="com.miui.player:id/tme_ad_skip_button"]',
          snapshotUrls: 'https://i.gkd.li/i/13610667',
        },
      ],
    },
    {
      key: 13,
      name: '局部广告-首页卡片广告',
      fastQuery: true,
      activityIds: 'com.tencent.qqmusiclite.activity.MainActivity',
      rules: '[id="com.miui.player:id/ad_close"]',
      exampleUrls: 'https://e.gkd.li/32ad4d0f-8992-45b0-9e1f-82ce2cc58dcb',
      snapshotUrls: 'https://i.gkd.li/i/16773614',
    },
  ],
});
