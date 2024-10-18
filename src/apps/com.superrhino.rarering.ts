import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.superrhino.rarering',
  name: 'Nico',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          matches:
            'FrameLayout > FrameLayout[childCount>2] > @View[clickable=true][visibleToUser=true] + TextView[visibleToUser=true][text=null]',
          snapshotUrls: 'https://i.gkd.li/i/13853858',
        },
      ],
    },
  ],
});
