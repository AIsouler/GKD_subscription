import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.xiaomi.shop',
  name: '小米商城',
  groups: [
    {
      key: 1,
      name: '全屏广告-广告弹窗',
      desc: '点击关闭',
      rules: [
        {
          key: 0,
          quickFind: true,
          activityIds: [
            'com.xiaomi.shop2.activity.MainActivity',
            'com.xiaomi.shop.plugin.homepage.utils.AdDialog',
          ],
          matches:
            '@ImageView[index=1][clickable=true] <2 LinearLayout[childCount=2] < RelativeLayout < [id="android:id/content"]',
          exampleUrls:
            'https://m.gkd.li/57941037/85d8e8e9-b438-4904-86e2-4cb53735a70c',
          snapshotUrls: [
            'https://i.gkd.li/i/14393039',
            'https://i.gkd.li/i/12649330',
          ],
        },
      ],
    },
  ],
});
