import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.leixun.taofen8',
  name: '淘粉吧',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          matches:
            'FrameLayout > FrameLayout[childCount>2] > @View[clickable=true][visibleToUser=true] + TextView[visibleToUser=true][text=null]',
          snapshotUrls: 'https://i.gkd.li/i/13937324',
        },
      ],
    },
  ],
});
