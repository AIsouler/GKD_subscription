import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.xiaomi.shop',
  name: '小米商城',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      rules: [
        {
          key: 0,
          activityIds: [
            'com.xiaomi.shop2.activity.MainActivity',
            'com.xiaomi.shop.plugin.homepage.utils.AdDialog',
          ],
          matches:
            '[id="android:id/content"] > RelativeLayout > LinearLayout[childCount=2] > ImageView[index=1][clickable=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/12649330',
            'https://i.gkd.li/i/14393039',
          ],
        },
      ],
    },
  ],
});
