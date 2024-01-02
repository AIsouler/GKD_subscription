import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.yoloho.dayima',
  name: '大姨妈',
  groups: [
    {
      key: 1,
      name: '广告弹窗',
      matchTime: 10000,
      rules: [
        {
          key: 0,
          name: '腾讯SDK',
          matches:
            '[id="android:id/content"] >n FrameLayout[index=2] > ImageView',
          snapshotUrls: 'https://i.gkd.li/import/13800255',
        },
      ],
    },
  ],
});
