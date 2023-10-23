import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.wondertek.paper',
  name: '澎湃新闻',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      activityIds: ['cn.thepaper.paper.ui.splash.welcome.LaunchActivity'],
      matchLauncher: true,
      rules: [
        {
          matches:
            '[id="com.wondertek.paper:id/count_down" || id="com.wondertek.paper:id/count_miss"]',
          snapshotUrls: [
            'https://gkd-kit.gitee.io/import/12644536',
            'https://gkd-kit.gitee.io/import/12645559',
            'https://gkd-kit.gitee.io/import/13064620', //matchLauncher
          ],
        },
      ],
    },
    {
      key: 2,
      name: '应用内弹窗',
      activityIds: ['cn.thepaper.paper.ui.main.MainActivity'],
      rules: [
        {
          matches:
            '[id="com.wondertek.paper:id/second_num"] <2 [id="com.wondertek.paper:id/relative_layout"] + [id="com.wondertek.paper:id/close_photo"]',
          snapshotUrls: ['https://gkd-kit.gitee.io/import/12899226'],
        },
      ],
    },
  ],
});
