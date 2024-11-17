import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.qq.qcloud',
  name: '腾讯微云',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      actionMaximumKey: 0,
      priorityTime: 10000,
      rules: [
        {
          key: 0,
          matches: '[id="com.qq.qcloud:id/gdt_ad_text"] + ImageView',
          snapshotUrls: 'https://i.gkd.li/i/12755789',
        },
        {
          key: 1,
          matches:
            '[text^="互动广告"] + @LinearLayout[clickable=true] > ImageView',
          snapshotUrls: 'https://i.gkd.li/i/12755799',
        },
        {
          key: 2,
          matches:
            '[id="android:id/content"] >2 FrameLayout[childCount=4] > @LinearLayout[clickable=true] > ImageView',
          snapshotUrls: 'https://i.gkd.li/i/14735621',
        },
      ],
    },
  ],
});
