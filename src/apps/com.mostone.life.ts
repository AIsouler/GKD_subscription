import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.mostone.life',
  name: '默往',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      fastQuery: true,
      matchTime: 10000,
      resetMatch: 'app',
      actionMaximum: 1,
      rules:
        'FrameLayout > FrameLayout[childCount>2] > @View[clickable=true][visibleToUser=true] + TextView[text=null] <<n [id="android:id/content"]',
      snapshotUrls: 'https://i.gkd.li/i/13832104',
    },
  ],
});
