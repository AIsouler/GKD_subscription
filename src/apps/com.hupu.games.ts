import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.hupu.games',
  name: '虎扑',
  groups: [
    {
      key: 1,
      name: '分段广告-推荐流广告',
      desc: '点击卡片右上角广告文字,出现广告反馈,点击屏蔽该广告',
      fastQuery: true,
      activityIds: [
        'com.hupu.games.main.MainActivity',
        'com.hupu.android.bbs.detail.PostDetailActivity',
        'com.hupu.topic.TopicActivity',
        'com.hupu.android.bbs.page.rating.ratingDetail.RatingDetailActivity',
      ],
      rules: [
        {
          key: 0,
          matches: '[vid="shield_view"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12511005',
            'https://i.gkd.li/i/13258026',
            'https://i.gkd.li/i/13259692',
            'https://i.gkd.li/i/15360331',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          matches: '@[clickable=true] > [text="屏蔽该广告"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12511010',
            'https://i.gkd.li/i/12534848',
            'https://i.gkd.li/i/13259699',
            'https://i.gkd.li/i/15360360',
          ],
        },
      ],
    },
  ],
});
