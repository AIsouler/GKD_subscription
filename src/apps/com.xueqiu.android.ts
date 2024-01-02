import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.xueqiu.android',
  name: '雪球',
  groups: [
    {
      key: 1,
      name: '首页广告',
      rules: [
        {
          quickFind: true,
          activityIds:
            'com.xueqiu.android.mainnesting.view.MainNestingActivity',
          matches: '[id=`com.xueqiu.android:id/ad_close`]',
          exampleUrls:
            'https://m.gkd.li/33366298/d05d1eec-cda5-4d37-a494-8eef7b7871dd',
          snapshotUrls: 'https://i.gkd.li/import/13388227',
        },
      ],
    },
    {
      key: 2,
      name: '评论区广告',
      rules: [
        {
          quickFind: true,
          activityIds: 'com.xueqiu.android.community.StatusDetailActivity',
          matches: '[id=`com.xueqiu.android:id/ad_card_close`]',
          exampleUrls:
            'https://m.gkd.li/33366298/b223cc74-fd4f-45a2-89ab-4a18ddffc01c',
          snapshotUrls: 'https://i.gkd.li/import/13388361',
        },
      ],
    },
  ],
});
