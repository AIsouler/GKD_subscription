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
  ],
});
