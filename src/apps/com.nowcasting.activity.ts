import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.nowcasting.activity',
  name: '彩云天气',
  groups: [
    {
      key: 1,
      name: '弹窗广告_VIP',
      quickFind: true,
      activityIds: 'com.nowcasting.activity.WeatherActivity',
      rules: [
        {
          matches:
            '[text="开心收下"] + [id="com.nowcasting.activity:id/iv_close"]',
          snapshotUrls: 'https://i.gkd.li/import/13405130',
        },
      ],
    },
    {
      key: 2,
      name: '弹窗广告_外部应用',
      quickFind: true,
      activityIds: 'com.nowcasting.activity.WeatherActivity',
      rules: [
        {
          matches: [
            '[id=null][text^="立即" || text^="领取" || text^="了解"][text.length=4]',
            '[id="android:id/content"] >2 FrameLayout[childCount=3||childCount=2||childCount=4] > FrameLayout[childCount=5||childCount=6||childCount=8] > FrameLayout[childCount=1] > ImageView[text=null][visibleToUser=true]',
          ],
          snapshotUrls: 'https://i.gkd.li/import/13405131',
        },
      ],
    },
  ],
});
