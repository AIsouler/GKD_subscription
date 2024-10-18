import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.uanmi.miaojiaccount',
  name: '熊猫记账',
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
          exampleUrls:
            'https://m.gkd.li/57941037/d0f2f014-49e7-4f00-b207-c90e870693ea',
          snapshotUrls: 'https://i.gkd.li/i/14511621',
        },
      ],
    },
  ],
});
