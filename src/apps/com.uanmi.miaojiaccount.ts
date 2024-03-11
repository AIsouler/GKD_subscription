import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.uanmi.miaojiaccount',
  name: '熊猫记账',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          quickFind: true,
          matches:
            'FrameLayout > FrameLayout[childCount>2] > @View[clickable=true] + TextView <<n [id="android:id/content"]',
          exampleUrls:
            'https://m.gkd.li/57941037/d0f2f014-49e7-4f00-b207-c90e870693ea',
          snapshotUrls: 'https://i.gkd.li/i/14511621',
        },
      ],
    },
  ],
});
