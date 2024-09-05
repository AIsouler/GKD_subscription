import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.romielf.mrsc',
  name: '每日赛车',
  groups: [
    {
      key: 1,
      name: '局部广告-新闻页面广告',
      desc: '点击准确率灵敏度不太高',
      activityIds: 'com.romielf.mrsc.MainActivity',
      rules: [
        {
          key: 1,
          matches: '@Image < View -n View >2 View[text="广告"]',
          snapshotUrls: 'https://i.gkd.li/i/12667539',
        },
        {
          key: 2,
          matches: '[id="com.byted.pangle:id/tt_item_tv"][text="不感兴趣"]', // 字节SDK广告
          snapshotUrls: 'https://i.gkd.li/i/12667549',
        },
        {
          key: 3,
          activityIds: 'com.romielf.mrsc.MainActivity',
          matches: '[text="广告"] <<4 FrameLayout +2 FrameLayout > View',
          snapshotUrls: 'https://i.gkd.li/i/16894284',
        },
        {
          preKeys: 3,
          matches: '[text="不感兴趣"]',
          snapshotUrls: 'https://i.gkd.li/i/16894284',
        },
      ],
    },
  ],
});
