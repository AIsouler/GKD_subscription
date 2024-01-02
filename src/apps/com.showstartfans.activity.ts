import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.showstartfans.activity',
  name: '秀动',
  groups: [
    {
      key: 1,
      name: '弹窗广告',
      rules: [
        {
          key: 0,
          activityIds:
            'com.showstartfans.activity.activitys.maintab.newmain.MainNewActivity',
          quickFind: true,
          matches: '[id="com.showstartfans.activity:id/img_close_coupon"]',
          snapshotUrls: 'https://i.gkd.li/import/13670432',
        },
      ],
    },
  ],
});
