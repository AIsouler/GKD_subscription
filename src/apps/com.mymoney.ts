import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.mymoney',
  name: '随手记',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      desc: '点击跳过',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      actionMaximumKey: 0,
      priorityTime: 10000,
      rules: [
        {
          key: 0,
          matches:
            'FrameLayout > FrameLayout[childCount>2] > @View[clickable=true][visibleToUser=true] + TextView[visibleToUser=true][text=null]',
          snapshotUrls: 'https://i.gkd.li/i/13855760',
        },
        {
          key: 1,
          fastQuery: true,
          matches: '[text*="跳过"][text.length<=10]',
          snapshotUrls: [
            'https://i.gkd.li/i/13939216',
            'https://i.gkd.li/i/13939163',
          ],
        },
      ],
    },
  ],
});
