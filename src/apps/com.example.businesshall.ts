import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.example.businesshall',
  name: '中国移动浙江',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: ['com.businesshall.activity.NewLogoActivity'],
      rules: [
        {
          matches: '[id="com.example.businesshall:id/jump_layout"]',
          snapshotUrls: ['https://i.gkd.li/import/import/12830978'],
        },
      ],
    },
  ],
});
