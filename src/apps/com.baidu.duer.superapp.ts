import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.baidu.duer.superapp',
  name: '小度',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          quickFind: true,
          matches: '[text*="跳过"][text.length<10][clickable=true]',
          exampleUrls:
            'https://m.gkd.li/57941037/017edf59-e705-4f92-9726-af7fec5aaf41',
          snapshotUrls: 'https://i.gkd.li/i/14368528',
        },
        {
          key: 1,
          actionCdKey: 0,
          matches:
            'FrameLayout > FrameLayout[childCount>2] > @View[clickable=true] + TextView',
          exampleUrls:
            'https://m.gkd.li/57941037/7d338956-f006-4775-a418-2ae6dc21ef9a',
          snapshotUrls: 'https://i.gkd.li/i/14204175',
        },
      ],
    },
  ],
});
