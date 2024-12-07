import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'tv.danmaku.bilibilihd',
  name: '哔哩哔哩HD',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          matches: '[id="tv.danmaku.bilibilihd:id/count_down"]',
          snapshotUrls: 'https://i.gkd.li/i/13031261',
        },
      ],
    },
    {
      key: 2,
      name: '分段广告-首页、视频播放页广告',
      desc: '点击[更多]-点击[不感兴趣]',
      fastQuery: true,
      rules: [
        {
          key: 0,
          activityIds: 'tv.danmaku.bili.MainActivityV2',
          matches: '@[vid="more"][visibleToUser=true] - [vid="desc_content"]',
          exampleUrls: 'https://e.gkd.li/c947945b-db14-4873-8245-269d5bd7c496',
          snapshotUrls: [
            'https://i.gkd.li/i/17726316',
            'https://i.gkd.li/i/17891830',
          ],
        },
        {
          key: 1,
          activityIds:
            'com.bilibili.ship.theseus.hd.detail.HDUnitedBizDetailsActivity',
          matches: '@[vid="more"] -3 [vid="ad_desc"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/ba14fc80-a227-479a-be82-fcddf01b1aa9',
          snapshotUrls: 'https://i.gkd.li/i/17726295',
        },
        {
          preKeys: [0, 1],
          activityIds: [
            'tv.danmaku.bili.MainActivityV2',
            'com.bilibili.ship.theseus.hd.detail.HDUnitedBizDetailsActivity',
          ],
          matches: '@[clickable=true] > [text="不感兴趣"]',
          exampleUrls: [
            'https://e.gkd.li/516beab1-9421-4d71-b803-9f56a15f94de',
            'https://e.gkd.li/ea61bb70-6919-48de-bf07-dbf653a09e08',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/17726321',
            'https://i.gkd.li/i/17726285',
            'https://i.gkd.li/i/17892061',
          ],
        },
      ],
    },
  ],
});
