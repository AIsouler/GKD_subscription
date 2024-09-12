import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.taobao.htao.android',
  name: '淘宝Lite',
  groups: [
    {
      key: 1,
      name: '局部广告-关闭顶部[打开淘宝]横幅',
      fastQuery: true,
      activityIds: 'com.taobao.htao.android.detail.DetailActivity',
      rules: [
        {
          matches:
            'WebView[text$="天猫Tmall.com"] >2 View[id=null][childCount=1] > @TextView[visibleToUser=true][text=""] <<n [vid="detail_swipe_to_refresher"]',
          exampleUrls: 'https://e.gkd.li/661fca21-45e3-4e89-8ccc-b8bafb1bab02',
          snapshotUrls: 'https://i.gkd.li/i/16842507',
        },
      ],
    },
    {
      key: 2,
      name: '其他-关闭切换站点提示',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches: [
            '[vid="change_country_layout"]',
            '[vid="uik_mdButtonClose"]',
          ],
          exampleUrls: 'https://e.gkd.li/2b0af049-98c9-43b2-8ae5-a40bf6833e95',
          snapshotUrls: 'https://i.gkd.li/i/16976226',
        },
      ],
    },
  ],
});
