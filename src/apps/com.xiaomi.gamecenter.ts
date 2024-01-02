import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.xiaomi.gamecenter',
  name: '小米游戏中心',
  groups: [
    {
      key: 1,
      name: '首页右侧悬浮广告',
      activityIds: 'com.xiaomi.gamecenter.ui.MainTabActivity',
      rules:
        '[id="com.xiaomi.gamecenter:id/ad_view"] + [id="com.xiaomi.gamecenter:id/close_btn"]',
      snapshotUrls: 'https://i.gkd.li/import/12715800',
    },
  ],
});
