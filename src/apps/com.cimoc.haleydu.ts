import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.cimoc.haleydu',
  name: 'Cimoc',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      quickFind: true,
      rules: [
        {
          matches: '[id="com.cimoc.haleydu:id/tvSkip"]',
          snapshotUrls: 'https://i.gkd.li/import/13744813',
        },
      ],
    },
    {
      key: 1,
      name: '应用内弹窗',
      activityIds: 'com.haleydu.cimoc.SplashActivity',
      rules: [
        {
          matches: 'FrameLayout[childCount=5] > @FrameLayout > ImageView',
          snapshotUrls: 'https://i.gkd.li/import/13748827',
        },
      ],
    },
  ],
});
