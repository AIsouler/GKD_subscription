import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.romielf.mrsc',
  name: '每日赛车',
  groups: [
    {
      name: '新闻页面摇一摇广告',
      key: 1,
      enable: false,
      activityIds: 'com.romielf.mrsc.MainActivity',
      desc: '点击准确率灵敏度不太高',
      rules: [
        {
          matches: '@Image < View -n View >2 View[text="广告"]',
          snapshotUrls: 'https://i.gkd.li/import/12667539',
        },
        {
          matches: '[id="com.byted.pangle:id/tt_item_tv"][text="不感兴趣"]', // 字节SDK广告
          snapshotUrls: 'https://i.gkd.li/import/12667549',
        },
      ],
    },
  ],
});
