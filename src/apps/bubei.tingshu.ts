import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'bubei.tingshu',
  name: '懒人听书',
  groups: [
    {
      key: 1,
      name: '局部广告-悬浮广告',
      rules: [
        {
          key: 0,
          name: '播放列表-右侧悬浮广告',
          fastQuery: true,
          activityIds:
            'bubei.tingshu.listen.book.detail.activity.DetailActivity',
          matches: '[id="bubei.tingshu:id/closeIcon"][desc="关闭"]',
          snapshotUrls: 'https://i.gkd.li/i/13348489',
        },
      ],
    },
    {
      key: 2,
      name: '更新提示',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: '[text="发现新版本"] +2 * > [text="暂不升级"]',
      snapshotUrls: 'https://i.gkd.li/i/13545953',
    },
  ],
});
