import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.taitedi.hdd.ayi',
  name: '爱其意',
  groups: [
    {
      key: 7,
      name: '全屏广告',
      activityIds: ['.MainActivity'],
      rules: [
        {
          matches:
            'ImageView[height <= 60][width <=60][name="android.widget.ImageView"]',
          snapshotUrls: 'https://i.gkd.li/i/18285341',
        },
      ],
    },
  ],
});
