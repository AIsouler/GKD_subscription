import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.vgjump.jump',
  name: 'Jump',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches:
            'FrameLayout > FrameLayout[childCount>2] > @View[clickable=true] + TextView',
          exampleUrls:
            'https://m.gkd.li/57941037/722ac7cf-f0ef-4cae-9351-60150b5425d9',
          snapshotUrls: 'https://i.gkd.li/i/14446438',
        },
      ],
    },
  ],
});
