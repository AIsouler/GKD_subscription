import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'csii.com.qny',
  name: '黔农云',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      desc: '点击跳过按钮',
      matchLauncher: true,
      activityIds: 'csii.com.qny.ui.activity.AdvertisementActivity',
      rules: [
        {
          matches: '[id="csii.com.qny:id/tv_count_down"]',
          snapshotUrls: 'https://i.gkd.li/import/12908332',
        },
      ],
    },
  ],
});
