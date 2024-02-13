import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.coloros.weather2',
  name: '天气',
  groups: [
    {
      key: 1,
      name: '局部广告-卡片广告',
      desc: '点击关闭',
      rules: [
        {
          quickFind: true,
          activityIds: 'com.oplus.weather.main.view.WeatherMainActivity',
          matches: '[vid="feed_close"]',
          exampleUrls:
            'https://m.gkd.li/57941037/fc08493c-dec2-4534-9f61-3627aa337b30',
          snapshotUrls: 'https://i.gkd.li/import/14258190',
        },
      ],
    },
  ],
});
