import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.qingwatq.weather',
  name: '呱呱天气',
  groups: [
    {
      key: 1,
      name: '局部广告-卡片式广告',
      rules: [
        {
          key: 0,
          activityIds: 'com.qingwatq.weather.home.HomeActivity',
          matches:
            '[id="com.qingwatq.weather:id/titleArea"] + [id="com.qingwatq.weather:id/closeImg"]',
          snapshotUrls: 'https://i.gkd.li/import/13476350',
        },
      ],
    },
  ],
});
