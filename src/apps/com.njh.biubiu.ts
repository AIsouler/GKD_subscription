import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.njh.biubiu',
  name: 'biubiu加速器',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.njh.ping.business.base.activity.BusinessActivity',
      rules: [
        {
          matches: '[text="跳过"]',
          snapshotUrls: 'https://i.gkd.li/import/12512845',
        },
      ],
    },
  ],
});
