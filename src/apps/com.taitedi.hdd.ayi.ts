import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.taitedi.hdd.ayi',
  name: '爱其意',
  groups: [
    {
      key: 1,
      name: '首页-开屏广告',
      exampleUrls: [
        'https://github.com/gkd-kit/subscription/assets/38517192/57787554-0443-4bc0-9f29-1759aae07b9b',
      ],
      activityIds: [
	   '.MainActivity',
        null,
      ],
      rules: [
		{
          matches: '[View[desc="我知道了"]]',
          snapshotUrls: [
            'https://i.gkd.li/i/18261037'
          ],
        },
        {
          matches: '[ImageView[height=28][width=28][name="android.widget.ImageView"]]',
          snapshotUrls: 'https://i.gkd.li/i/18259775',
        },
      ],
    },
  ],
});
