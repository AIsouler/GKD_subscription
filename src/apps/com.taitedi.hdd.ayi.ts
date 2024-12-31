import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.taitedi.hdd.ayi',
  name: '爱其意',
  groups: [
    {
      key: 7,
      name: '全屏广告',
      exampleUrls: [
        'https://github.com/gkd-kit/subscription/assets/38517192/57787554-0443-4bc0-9f29-1759aae07b9b',
      ],
      activityIds: ['.MainActivity', '.MainActivity'],
      rules: [
        {
          matches: 'View[desc="我知道了"]',
          snapshotUrls: ['https://i.gkd.li/i/18261037'],
        },
        {
          matches:
            'ImageView[height=28 || height=56][width=28 || width=56][name="android.widget.ImageView"]',
          snapshotUrls: 'https://i.gkd.li/i/18259775',
        },
      ],
    },
  ],
});
