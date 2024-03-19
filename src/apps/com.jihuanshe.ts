import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.jihuanshe',
  name: '集换社',
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
            'https://m.gkd.li/57941037/44193959-0c19-44ff-9549-5e69d2d69013',
          snapshotUrls: 'https://i.gkd.li/i/14303879',
        },
      ],
    },
  ],
});
