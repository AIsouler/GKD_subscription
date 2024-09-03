import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.taobao.htao.android',
  name: '淘宝Lite',
  groups: [
    {
      key: 1,
      name: '局部广告-打开淘宝',
      fastQuery: true,
      activityIds: 'com.taobao.htao.android.detail.DetailActivity',
      rules: [
        {
          matches:
            '@TextView[visibleToUser=true][text=""] < View[id=null][childCount=1] <<n WebView[text="- 天猫Tmall.com"] <<4 FrameLayout[vid="detail_root"]',
          exampleUrls: 'https://e.gkd.li/661fca21-45e3-4e89-8ccc-b8bafb1bab02',
          snapshotUrls: 'https://i.gkd.li/i/16842507',
        },
      ],
    },
  ],
});
