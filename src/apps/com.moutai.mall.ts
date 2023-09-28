import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.moutai.mall',
  name: 'i茅台',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.moutai.mall.module.splash.SplashActivity',
      rules: '[id="com.moutai.mall:id/tvSkip"]',
      snapshotUrls: 'https://gkd-kit.songe.li/import/12745150',
    },
    {
      key: 1,
      name: '首页广告弹窗',
      activityIds: [
        'com.moutai.mall.MainActivity',
        'com.moutai.mall.module.splash.SplashActivity',
      ],
      rules:
        '[id="com.moutai.mall:id/ivPic"] + ViewGroup + [id="com.moutai.mall:id/vClose"]',
      snapshotUrls: [
        'https://gkd-kit.songe.li/import/12745130', // activityId: 'com.moutai.mall.MainActivity'
        'https://gkd-kit.songe.li/import/12745153', // activityId: 'com.moutai.mall.module.splash.SplashActivity'
      ],
    },
    {
      enable: false,
      key: 10,
      name: '请求通知权限弹窗',
      activityIds: 'com.moutai.mall.MainActivity',
      rules:
        '@[id="com.moutai.mall:id/vClose"] - LinearLayout > [text*="开通消息通知"]',
      snapshotUrls: 'https://gkd-kit.songe.li/import/12745142',
    },
  ],
});
