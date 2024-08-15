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
            '[id="android:id/content"] >(3,4) FrameLayout[childCount>3] > FrameLayout[childCount=1] > ImageView[childCount=0][text=null]',
          snapshotUrls: [
            'https://i.gkd.li/i/13521556',
            'https://i.gkd.li/i/16621748',
          ],
        },
        {
          key: 1,
          name: '快手广告',
          fastQuery: true,
          activityIds: 'com.feiyu.morin.view.main.MainActivity',
          matches: ['[text="广告"]', '@ViewGroup > [text="跳过"]'],
          snapshotUrls: 'https://i.gkd.li/i/13546184',
        },
        {
          key: 2,
          fastQuery: true,
          activityIds: 'com.feiyu.morin.view.main.MainActivity',
          matches:
            '@ViewGroup[clickable=true][childCount=1] < ViewGroup +2 ViewGroup > [text="广告"]',
          exampleUrls: 'https://e.gkd.li/52f8dddd-3604-4144-96ce-804c66e77a19',
          snapshotUrls: 'https://i.gkd.li/i/16621747',
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
