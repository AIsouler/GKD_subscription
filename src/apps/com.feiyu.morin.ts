import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.feiyu.morin',
  name: '魔音MORIN',
  groups: [
    {
      key: 0,
      name: '弹窗广告',
      rules: [
        {
          key: 0,
          name: '腾讯广告',
          activityIds: 'com.feiyu.morin.view.main.MainActivity',
          matches:
            'ImageView - FrameLayout > FrameLayout[childCount=1] > ImageView[childCount=0]',
          snapshotUrls: 'https://i.gkd.li/import/13521556',
        },
        {
          key: 1,
          name: '快手广告',
          activityIds: 'com.feiyu.morin.view.main.MainActivity',
          matches: [
            'ViewGroup[childCount=2] > ImageView + [text="广告"]',
            '@ViewGroup > [text="跳过"]',
          ],
          snapshotUrls: 'https://i.gkd.li/import/13546184',
        },
      ],
    },
    {
      key: 1,
      name: '卡片式广告',
      rules: [
        {
          key: 0,
          name: '腾讯广告',
          activityIds: 'com.feiyu.morin.view.main.MainActivity',
          matches:
            'ImageView + LinearLayout + LinearLayout + FrameLayout > ImageView',
          snapshotUrls: 'https://i.gkd.li/import/13521680',
        },
      ],
    },
  ],
});
