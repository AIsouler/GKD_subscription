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
      priorityTime: 10000,
      rules: [
        {
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
    {
      key: 1,
      name: '功能类-扫码确认解锁',
      desc: '扫码成功后点击[确认并解锁]',
      rules: [
        {
          fastQuery: true,
          activityIds: '.ui.qrcode.ScanResultActivity',
          matches: ['[text="扫码成功"]', '[text="确认并解锁"]'],
          exampleUrls: 'https://e.gkd.li/31a62ba3-9329-4abe-ab30-99006ffa04d4',
          snapshotUrls: 'https://i.gkd.li/i/17632893',
        },
      ],
    },
  ],
});
