import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'me.zhouzhuo810.zznote',
  name: '小周便签',
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
          fastQuery: true,
          matches: '@[vid^="btn_next_"] - [vid="native_ad_container"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12798528',
            'https://i.gkd.li/i/14662294',
          ],
        },
        {
          key: 1,
          fastQuery: true,
          matches: '[text*="跳过"][text.length<10][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/13800235',
            'https://i.gkd.li/i/16115850',
          ],
        },
        {
          key: 2,
          matches:
            'FrameLayout > FrameLayout[childCount>2] > @View[clickable=true][visibleToUser=true] + TextView[visibleToUser=true][text=null]',
          snapshotUrls: 'https://i.gkd.li/i/16118464',
        },
      ],
    },
  ],
});
