import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.wwwscn.yuexingbao',
  name: '悦通行',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          fastQuery: true,
          matches:
            'FrameLayout > FrameLayout[childCount>2] > @View[clickable=true][visibleToUser=true] + TextView[visibleToUser=true][text=null]',
          exampleUrls:
            'https://m.gkd.li/57941037/5f7651a1-de68-4ca2-bbb6-b42b6b7e73f1',
          snapshotUrls: [
            'https://i.gkd.li/i/13239194',
            'https://i.gkd.li/i/13723967',
          ],
        },
      ],
    },
  ],
});
