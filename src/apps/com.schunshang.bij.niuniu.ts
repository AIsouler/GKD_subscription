import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.schunshang.bij.niuniu',
  name: '牛牛视频',
  groups: [
    {
      key: 1,
      name: '弹窗广告',
      rules: [
        {
          key: 0,
          name: '腾讯广告-1',
          activityIds: 'com.sexy.goddess.tab.RootActivity',
          matches:
            'ImageView -2 FrameLayout > FrameLayout > ImageView + FrameLayout[childCount=1] > ImageView[childCount=0]',
          snapshotUrls: 'https://i.gkd.li/import/13635127',
        },
        {
          key: 1,
          name: '腾讯广告-2',
          activityIds: 'com.sexy.goddess.tab.RootActivity',
          matches:
            'ImageView -2 FrameLayout > FrameLayout[childCount=1] > ImageView[childCount=0]',
          snapshotUrls: 'https://i.gkd.li/import/13635128',
        },
      ],
    },
  ],
});
