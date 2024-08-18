import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.zidongdianji',
  name: '自动点击器',
  groups: [
    {
      key: 1,
      name: '分段广告-卡片广告',
      fastQuery: true,
      activityIds: 'com.autoclicker.clicker.MainActivity',
      rules: [
        {
          key: 1,
          matches:
            'WebView >3 View[childCount=2] > View[childCount=4] > View[childCount=1] > @Image[childCount=0][visibleToUser=true][text=""] <<n [vid="native_ad_container_top" || vid="rv_record"]',
          snapshotUrls: [
            'https://i.gkd.li/i/14782886',
            'https://i.gkd.li/i/16646833',
          ],
        },
        {
          preKeys: [1],
          key: 2,
          matches: '@[clickable=true] > [text="不感兴趣"]',
          snapshotUrls: 'https://i.gkd.li/i/14783475',
        },
      ],
    },
  ],
});
