import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.wondertek.paper',
  name: '澎湃新闻',
  groups: [
    {
      key: 2,
      name: '全屏广告-弹窗广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'cn.thepaper.paper.ui.main.MainActivity',
          matches:
            '[id="com.wondertek.paper:id/relative_layout"] + [id="com.wondertek.paper:id/close_photo"]',
          snapshotUrls: 'https://i.gkd.li/i/12899226',
        },
      ],
    },
  ],
});
