import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.hihonor.android.totemweather',
  name: '天气',
  groups: [
    {
      key: 1,
      name: '局部广告-底部卡片广告',
      desc: '点击关闭',
      rules: [
        {
          key: 0,
          fastQuery: true,
          activityIds: '.WeatherHome',
          matches: '[vid="ad_cancel" || vid="btn_close"][visibleToUser=true]',
          exampleUrls:
            'https://m.gkd.li/57941037/764769ff-b571-498a-ac57-f4b1ae331056',
          snapshotUrls: [
            'https://i.gkd.li/i/14193808',
            'https://i.gkd.li/i/19659583',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '分段广告-卡片广告',
      fastQuery: true,
      activityIds: '.WeatherHome',
      rules: [
        {
          key: 0,
          matches: '[vid="ads_tag"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/7f9ea2fc-bb89-4aeb-b569-9ddbbd95452b',
          snapshotUrls: 'https://i.gkd.li/i/20116008',
        },
        {
          preKeys: [0],
          matches: '[text="不感兴趣"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/38517cb1-c930-40cb-8c95-a4e1ecd57323',
          snapshotUrls: 'https://i.gkd.li/i/20116013',
        },
      ],
    },
  ],
});
