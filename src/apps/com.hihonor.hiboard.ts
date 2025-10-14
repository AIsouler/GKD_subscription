import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.hihonor.hiboard',
  name: '负一屏',
  groups: [
    {
      key: 1,
      name: '分段广告-卡片广告',
      fastQuery: true,
      activityIds:
        'com.hihonor.feed.ui.weather.nested.NestedWeatherDetailActivity',
      rules: [
        {
          key: 0,
          matches: '[vid="ll_ad_flag_layout"] > [vid="iv_close"]',
          exampleUrls: 'https://e.gkd.li/3ca8edb5-ba16-406c-8319-7bc5389f6e31',
          snapshotUrls: 'https://i.gkd.li/i/19670830',
        },
        {
          preKeys: [0],
          matches: '[text="不感兴趣"]',
          exampleUrls: 'https://e.gkd.li/eaea2f1e-741a-4171-9cc1-8a2c86848d93',
          snapshotUrls: 'https://i.gkd.li/i/19670664',
        },
      ],
    },
  ],
});
