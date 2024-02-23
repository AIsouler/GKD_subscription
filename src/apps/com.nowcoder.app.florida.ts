import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.nowcoder.app.florida',
  name: '牛客',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      actionCdKey: 0,
      actionMaximumKey: 0,
      rules: [
        {
          key: 0,
          matches:
            '@View <2 FrameLayout[childCount=3] <2 FrameLayout[childCount=2] < FrameLayout[childCount=1] < [vid="fl_splash_container"]',
          snapshotUrls: 'https://i.gkd.li/i/13855443',
        },
      ],
    },
  ],
});
