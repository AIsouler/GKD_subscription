import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.shuqi.controller',
  name: '书旗小说',
  groups: [
    {
      key: 0,
      name: '局部广告',
      rules: [
        {
          key: 0,
          fastQuery: true,
          activityIds: 'com.shuqi.home.MainActivity',
          anyMatches: [
            '[vid="promotion_close"][visibleToUser=true]',
            '[visibleToUser=true][vid="promotion_close"]',
          ],
          exampleUrls: 'https://e.gkd.li/a634cd5a-7b84-44ad-b65b-99f5e8769eeb',
          snapshotUrls: [
            'https://i.gkd.li/i/23831955',
            'https://i.gkd.li/i/24859977', // 不可快速查询
          ],
        },
      ],
    },
    {
      key: 1,
      name: '全屏广告',
      rules: [
        {
          key: 0,
          fastQuery: true,
          matchTime: 10000,
          actionMaximum: 1,
          resetMatch: 'app',
          activityIds: 'com.shuqi.home.MainActivity',
          matches: '[vid="bottomCloseImg"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/9cfc90dc-9afe-45ff-8ee2-f8e173af9bd9',
          snapshotUrls: 'https://i.gkd.li/i/23831956',
        },
      ],
    },
  ],
});
