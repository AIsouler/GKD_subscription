import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.zb.sph.zaobaosingapore',
  name: '联合早报',
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
          activityIds: 'com.google.android.gms.ads.AdActivity',
          matches:
            '[id="mys-content"] > View[childCount=2] > View[index=1][childCount=1] > Button[clickable=true][childCount=0][visibleToUser=true][text=""]',
          exampleUrls: 'https://e.gkd.li/6892e4e4-a765-415d-9c23-5587472b6f6e',
          snapshotUrls: 'https://i.gkd.li/i/18297111',
        },
      ],
    },
    {
      key: 2,
      name: '局部广告-信息流广告',
      desc: '点击关闭',
      rules: [
        {
          fastQuery: true,
          activityIds: 'sg.com.sph.app.views.bnavigation.MainActivity',
          matches:
            '@Button[id="cbb"][text=""][clickable=true][visibleToUser=true] - [visibleToUser=true][id="abgb"] <<n [vid="adsLayout"]',
          exampleUrls: 'https://e.gkd.li/f3d93356-2762-4547-b5eb-abf9cc83eb6a',
          snapshotUrls: 'https://i.gkd.li/i/18297090',
        },
      ],
    },
  ],
});
