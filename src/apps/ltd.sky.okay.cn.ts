import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'ltd.sky.okay.cn',
  name: '漫天星',
  groups: [
    {
      key: 1,
      name: '弹窗广告',
      rules: [
        {
          key: 0,
          name: '腾讯广告',
          activityIds: [],
          matches:
            'ImageView -2 FrameLayout > FrameLayout > FrameLayout[childCount=1] > ImageView[childCount=0]',
          snapshotUrls: 'https://i.gkd.li/import/13625479',
        },
      ],
    },
  ],
});
