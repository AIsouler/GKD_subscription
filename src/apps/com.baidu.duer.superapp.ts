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
      rules:
        'FrameLayout > FrameLayout[childCount>2] > @View[clickable=true] + TextView',
      snapshotUrls: 'https://i.gkd.li/import/14204175',
    },
  ],
});
