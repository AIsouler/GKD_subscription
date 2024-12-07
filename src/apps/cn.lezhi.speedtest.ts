import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'cn.lezhi.speedtest',
  name: '网速管家',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      actionMaximumKey: 0,
      priorityTime: 10000,
      rules: [
        {
          key: 0,
          name: '字节SDK',
          matches:
            'FrameLayout > FrameLayout[childCount>2] > @View[clickable=true][text=null][visibleToUser=true] + TextView[visibleToUser=true][text=null][index=parent.childCount.minus(1)]',
          snapshotUrls: [
            'https://i.gkd.li/i/13544242',
            'https://i.gkd.li/i/13885906',
          ],
        },
        {
          key: 1,
          name: '腾讯SDK',
          fastQuery: true,
          matches: '[text*="跳过"][text.length<=10]',
          snapshotUrls: 'https://i.gkd.li/i/13626049',
        },
      ],
    },
  ],
});
