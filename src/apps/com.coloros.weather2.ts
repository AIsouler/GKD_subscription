import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.coloros.weather2',
  name: '天气',
  groups: [
    {
      key: 1,
      name: '分段广告-卡片广告',
      desc: '点击关闭',
      fastQuery: true,
      activityIds: 'com.oplus.weather.main.view.WeatherMainActivity',
      rules: [
        {
          key: 0,
          matches: '[vid="feed_close"]',
          exampleUrls:
            'https://m.gkd.li/57941037/fc08493c-dec2-4534-9f61-3627aa337b30',
          snapshotUrls: 'https://i.gkd.li/i/14258190',
        },
        {
          preKeys: [0],
          matches: '@[clickable=true] > [text="不感兴趣"]',
          exampleUrls: 'https://e.gkd.li/9137d262-7fda-4b57-a0bc-b9fa60634a22',
          snapshotUrls: 'https://i.gkd.li/i/16631878',
        },
      ],
    },
  ],
});
