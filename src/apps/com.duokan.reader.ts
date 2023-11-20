import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.duokan.reader',
  name: '多看',
  groups: [
    {
      key: 2,
      name: '首页-广告弹窗',
      quickFind: true,
      activityIds: 'com.duokan.reader.DkMainActivity',
      rules: '[id="com.duokan.reader:id/store_feed_layer_close"]',
      snapshotUrls: 'https://i.gkd.li/import/13248773',
    },
    {
      key: 3,
      name: '小说推荐弹窗',
      rules: [
        {
          key: 1,
          name: '退出阅读时的推荐弹窗',
          activityIds: 'com.duokan.reader.DkMainActivity',
          quickFind: true,
          matches:
            '[id="com.duokan.reader:id/reading_stop_read_recommend_stop"]',
          snapshotUrls: 'https://i.gkd.li/import/13413412',
        },
      ],
    },
  ],
});
