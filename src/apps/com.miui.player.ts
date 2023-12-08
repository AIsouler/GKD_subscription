import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.miui.player',
  name: '小米音乐',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      quickFind: true,
      rules: '[text*="跳过"][text.length<=10]',
      snapshotUrls: [
        'https://i.gkd.li/import/12700962',
        'https://i.gkd.li/import/12852707',
        'https://i.gkd.li/import/13490450',
      ],
    },
    {
      key: 1,
      name: '浮窗广告',
      desc: '关闭右侧飘窗广告',
      quickFind: true,
      activityIds:
        'com.tencent.qqmusiclite.activity.player.MusicPlayerActivity',
      rules:
        '[id="com.miui.player:id/free_mode_tips_layout"] + [id="com.miui.player:id/iv_close"]',
      snapshotUrls: 'https://i.gkd.li/import/13303283',
    },
    {
      key: 2,
      name: '横幅广告',
      desc: '关闭播放页面横幅广告',
      quickFind: true,
      activityIds:
        'com.tencent.qqmusiclite.activity.player.MusicPlayerActivity',
      rules: '[id="com.miui.player:id/ad_skip_text"][text="关闭"]',
      snapshotUrls: [
        'https://i.gkd.li/import/13304347', // 倒计时
        'https://i.gkd.li/import/13304344', // 可关闭
      ],
    },
    {
      key: 3,
      name: '弹窗广告_底部弹窗',
      activityIds: 'com.tencent.qqmusiccommon.hybrid.HybridViewActivity',
      rules: 'ViewGroup > @ViewGroup + ViewGroup[childCount=5]',
      snapshotUrls: ['https://i.gkd.li/import/13304343'],
    },
    {
      key: 4,
      name: '飘窗广告_首页右侧',
      activityIds: 'com.tencent.qqmusiclite.activity.MainActivity',
      quickFind: true,
      rules:
        '[id="com.miui.player:id/cl_floating_promote"] > [id="com.miui.player:id/iv_close"]',
      snapshotUrls: ['https://i.gkd.li/import/13562649'],
    },
    {
      enable: false,
      key: 10,
      name: '会员过期续费弹窗',
      activityIds: 'com.tencent.qqmusiccommon.hybrid.HybridViewActivity',
      rules: '[id=null][desc="关闭弹框按钮"][clickable=true]',
      snapshotUrls: 'https://i.gkd.li/import/12700955',
    },
    {
      enable: false,
      key: 11,
      name: '我的页面-顶部 banner 广告',
      activityIds: 'com.tencent.qqmusiclite.activity.MainActivity',
      rules:
        '[id="com.miui.player:id/banner_image"] + [id="com.miui.player:id/close_banner"]',
      snapshotUrls: 'https://i.gkd.li/import/12700984',
    },
  ],
});
