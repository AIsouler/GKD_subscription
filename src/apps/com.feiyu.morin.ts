import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.feiyu.morin',
  name: '魔音MORIN',
  groups: [
    {
      key: 0,
      name: '全屏广告-弹窗广告',
      rules: [
        {
          key: 0,
          name: '腾讯广告',
          activityIds: 'com.feiyu.morin.view.main.MainActivity',
          matches:
            'ImageView - FrameLayout > FrameLayout[childCount=1] > ImageView[childCount=0]',
          snapshotUrls: 'https://i.gkd.li/i/13521556',
        },
        {
          key: 1,
          name: '快手广告',
          activityIds: 'com.feiyu.morin.view.main.MainActivity',
          matches: [
            'ViewGroup[childCount=2] > ImageView + [text="广告"]',
            '@ViewGroup > [text="跳过"]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/13546184',
        },
      ],
    },
    {
      key: 1,
      name: '局部广告-卡片广告',
      rules: [
        {
          key: 0,
          name: '腾讯广告',
          activityIds: [
            'com.feiyu.morin.view.main.MainActivity',
            'com.feiyu.morin.view.main.PlayerBottomControlActivity',
          ],
          matches:
            'ImageView + LinearLayout + LinearLayout + FrameLayout[childCount=1] > ImageView[childCount=0]',
          snapshotUrls: [
            'https://i.gkd.li/i/13521680',
            'https://i.gkd.li/i/13625476',
          ],
        },
      ],
    },
  ],
});
