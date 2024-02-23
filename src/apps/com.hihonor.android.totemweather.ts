import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.hihonor.android.totemweather',
  name: '天气',
  groups: [
    {
      key: 1,
      name: '局部广告-底部卡片广告',
      desc: '点击关闭',
      rules: [
        {
          quickFind: true,
          activityIds: 'com.hihonor.android.totemweather.WeatherHome',
          matches: '[vid="ad_cancel"][visibleToUser=true]',
          exampleUrls:
            'https://m.gkd.li/57941037/764769ff-b571-498a-ac57-f4b1ae331056',
          snapshotUrls: 'https://i.gkd.li/i/14193808',
        },
      ],
    },
  ],
});
