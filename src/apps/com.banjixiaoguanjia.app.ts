import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.banjixiaoguanjia.app',
  name: '班级小管家',
  groups: [
    {
      key: 1,
      name: '分段广告-卡片广告',
      activityIds: 'com.banjixiaoguanjia.app.MainActivity',
      rules: [
        {
          key: 0,
          matches: '[id="com.byted.pangle:id/tt_bu_close"]',
          snapshotUrls: 'https://i.gkd.li/i/12904612',
        },
        {
          preKeys: 0,
          key: 1,
          matches: '@LinearLayout > [text="不感兴趣"]',
          snapshotUrls: 'https://i.gkd.li/i/12906196',
        },
      ],
    },
  ],
});
