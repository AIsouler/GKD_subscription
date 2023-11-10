import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.snda.wifilocating',
  name: 'WiFi万能钥匙',
  groups: [
    {
      key: -1,
      name: '开屏广告',
      activityIds: 'com.lantern.launcher.ui.MainActivity',
      snapshotUrls: 'https://i.gkd.li/import/12472605',
      rules: [
        'TextView[text="广告"] -3 RelativeLayout > TextView[text*="跳过"]',
      ],
    },
    {
      key: 0,
      name: '内部广告',
      activityIds: 'com.lantern.launcher.ui.MainActivityICS',
      rules: [
        {
          matches: [
            '[id=`com.snda.wifilocating:id/outer_ad_dislike_item_title`][text=`为什么看到此广告`]',
            '@[id=`com.snda.wifilocating:id/outer_ad_dislike_item_one`] [id=`com.snda.wifilocating:id/outer_ad_dislike_item_title`][text=`不感兴趣`]',
          ],
        },
        'ImageView[id=`com.snda.wifilocating:id/feed_item_sdk_logo`] < LinearLayout + [id=`com.snda.wifilocating:id/feed_item_dislike`]',
      ],
    },
  ],
});
