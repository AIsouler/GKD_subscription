import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'chuxin.shimo.shimowendang',
  name: '石墨文档',
  deprecatedKeys: [0],
  groups: [
    {
      key: 1,
      name: '首页顶部横幅广告',
      activityIds: 'chuxin.shimo.shimowendang.MainActivity',
      rules: '[desc="banner-desktop-announcement-close"]',
      snapshotUrls: 'https://i.gkd.li/import/13627960',
    },
  ],
});
