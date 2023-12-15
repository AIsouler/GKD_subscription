import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.showstartfans.activity',
  name: '秀动',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[text$="跳过"][text.length<=10]',
      snapshotUrls: 'https://i.gkd.li/import/12894279',
    },
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
