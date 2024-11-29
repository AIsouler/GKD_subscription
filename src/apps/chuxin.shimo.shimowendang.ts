import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'chuxin.shimo.shimowendang',
  name: '石墨文档',
  groups: [
    {
      key: 1,
      name: '局部广告-首页顶部横幅广告',
      rules: [
        {
          fastQuery: true,
          activityIds: 'chuxin.shimo.shimowendang.MainActivity',
          matches:
            '@[desc="banner-desktop-announcement-close"][visibleToUser=true] - ViewGroup > [text*="免费试用企业版"]',
          snapshotUrls: 'https://i.gkd.li/i/13627960',
        },
      ],
    },
  ],
});
