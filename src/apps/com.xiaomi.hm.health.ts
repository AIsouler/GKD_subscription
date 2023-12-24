import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.xiaomi.hm.health',
  name: 'Zepp Life',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[id="com.xiaomi.hm.health:id/skip_text"]',
      snapshotUrls: ['https://i.gkd.li/import/13197367'],
    },
    {
      key: 1,
      name: '首页-底部广告',
      quickFind: true,
      activityIds: 'com.xiaomi.hm.health.activity.ChannelMainTabActivity',
      rules: 'ImageView[id="com.xiaomi.hm.health:id/close_icon"]',
      snapshotUrls: 'https://i.gkd.li/import/13695424',
    },
  ],
});
