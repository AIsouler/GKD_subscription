import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.sjm.luobo',
  name: '追剧达人',
  groups: [
    {
      key: 6,
      name: '广告弹窗',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          name: '字节广告SDK',
          matches:
            'FrameLayout[childCount>1] > FrameLayout[childCount=1] > ImageView[width<90][height<90]',
          snapshotUrls: 'https://i.gkd.li/import/13723963',
        },
      ],
    },
  ],
});
