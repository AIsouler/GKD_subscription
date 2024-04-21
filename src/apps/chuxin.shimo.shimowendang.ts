import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'chuxin.shimo.shimowendang',
  name: '石墨文档',
  groups: [
    {
      key: 1,
      name: '局部广告-首页顶部横幅广告',
      activityIds: 'chuxin.shimo.shimowendang.MainActivity',
      rules: '[desc="banner-desktop-announcement-close"]',
      snapshotUrls: 'https://i.gkd.li/i/13627960',
    },
  ],
});
