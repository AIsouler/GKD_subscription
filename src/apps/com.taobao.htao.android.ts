import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.taobao.htao.android',
  name: '淘宝Lite',
  groups: [
    {
      key: 1,
      name: '功能类-商品详情页点击右上角[打开淘宝]',
      fastQuery: true,
      activityIds: 'com.taobao.htao.android.detail.DetailActivity',
      rules: [
        {
          matches:
            '@[visibleToUser=true][text="打开淘宝"] <<n [vid="detail_swipe_to_refresher"]',
          exampleUrls: 'https://e.gkd.li/661fca21-45e3-4e89-8ccc-b8bafb1bab02',
          snapshotUrls: 'https://i.gkd.li/i/16842507',
        },
      ],
    },
  ],
});
