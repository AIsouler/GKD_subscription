import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.wondertek.paper',
  name: '澎湃新闻',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      activityIds: ['cn.thepaper.paper.ui.splash.welcome.LaunchActivity'],
      rules: [
        {
          matches:
            '[id="com.wondertek.paper:id/count_down" || id="com.wondertek.paper:id/count_miss"]',
          snapshotUrls: [
            'https://gkd-kit.gitee.io/import/12644536',
            'https://gkd-kit.gitee.io/import/12645559',
          ],
        },
      ],
    },
  ],
});
