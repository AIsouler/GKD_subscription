import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'cn.wenyu.bodian',
  name: '波点音乐',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 2,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          fastQuery: true,
          action: 'clickCenter',
          matches:
            '[text*="跳过"][text.length<10][width<500 && height<300][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/349c0f9e-a1d2-4e1d-bd6e-e42c3b3c01a6',
          snapshotUrls: 'https://i.gkd.li/i/22845785',
        },
      ],
    },
    {
      key: 2,
      name: '全屏广告',
      rules: [
        {
          activityIds: '.MainActivity',
          matches:
            '@TextView[width<130&&height<130][clickable=true] + * > [text="开会员享专属曲库"]',
          snapshotUrls: 'https://i.gkd.li/i/22867851',
        },
      ],
    },
    {
      key: 3,
      name: '局部广告',
      rules: [
        {
          key: 0,
          activityIds: '.MainActivity',
          matches: 'ImageView[desc="广告"][clickable=true][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/b57e1862-ef27-4b2d-9cf4-c4c1a1a5262e',
          snapshotUrls: 'https://i.gkd.li/i/22878974',
        },
        {
          key: 1,
          activityIds: '.MainActivity',
          matches:
            '[desc$="广告"] > ImageView[index=1][width=height][clickable=true][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/5f249d6e-ac2d-4fda-a53c-039c8091ce63',
          snapshotUrls: 'https://i.gkd.li/i/22878992',
        },
      ],
    },
  ],
});
