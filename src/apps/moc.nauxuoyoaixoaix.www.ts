import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'moc.nauxuoyoaixoaix.www',
  name: '晓晓优选',
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
          matches:
            'FrameLayout > FrameLayout[childCount>2] > @View[clickable=true][visibleToUser=true] + TextView[visibleToUser=true][text=null]',
          snapshotUrls: [
            'https://i.gkd.li/i/13476862',
            'https://i.gkd.li/i/13820450',
          ],
        },
        {
          key: 1,
          fastQuery: true,
          matches: '[text^="跳过"][text.length<=10][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/13625367',
        },
      ],
    },
  ],
});
