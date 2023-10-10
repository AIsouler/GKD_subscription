import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.miui.player',
  name: '小米音乐',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: [
        'com.tencent.qqmusiclite.activity.MainActivity',
        'com.tencent.qqmusiclite.activity.SplashAdActivity',
      ],
      rules:
        '@TextView[text$=`跳过`] + TextView[id="com.miui.player:id/ad_view"]',
      snapshotUrls: [
        'https://gkd-kit.gitee.io/import/12700962',
        'https://gkd-kit.songe.li/import/12852707',
      ],
    },
    {
      enable: false,
      key: 10,
      name: '会员过期续费弹窗',
      activityIds: 'com.tencent.qqmusiccommon.hybrid.HybridViewActivity',
      rules: '[id=null][desc="关闭弹框按钮"][clickable=true]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/12700955',
    },
    {
      enable: false,
      key: 11,
      name: '我的页面-顶部 banner 广告',
      activityIds: 'com.tencent.qqmusiclite.activity.MainActivity',
      rules:
        '[id="com.miui.player:id/banner_image"] + [id="com.miui.player:id/close_banner"]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/12700984',
    },
  ],
});
