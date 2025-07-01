import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.romielf.mrsc',
  name: '每日赛车',
  groups: [
    {
      key: 1,
      name: '分段广告-新闻页面摇一摇广告',
      desc: '点击准确率灵敏度不太高',
      activityIds: 'com.romielf.mrsc.MainActivity',
      rules: [
        {
          key: 1,
          matches: '@Image < View -n View >2 View[text="广告"]',
          snapshotUrls: 'https://i.gkd.li/i/12667539',
        },
        {
          preKeys: [1],
          key: 2,
          matches: '[id="com.byted.pangle:id/tt_item_tv"][text="不感兴趣"]',
          snapshotUrls: 'https://i.gkd.li/i/12667549',
        },
      ],
    },
  ],
});
