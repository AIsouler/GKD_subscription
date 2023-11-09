import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.m4399.gamecenter',
  name: '4399游戏盒',
  groups: [
    {
      key: 1,
      name: '悬浮广告',
      rules: [
        {
          key: 0,
          name: '首页中心悬浮广告',
          matchLauncher: true,
          activityIds: 'com.bbk.launcher2.Launcher',
          matches:
            '[id="com.m4399.gamecenter:id/image"] + [id="com.m4399.gamecenter:id/close"]',
          snapshotUrls: 'https://i.gkd.li/import/13297551',
        },
        {
          key: 1,
          name: '首页右侧悬浮广告',
          activityIds:
            'com.m4399.gamecenter.plugin.main.controllers.ApplicationActivity',
          quickFind: true,
          matches:
            '@[id="com.m4399.gamecenter:id/close"] + [id="com.m4399.gamecenter:id/image"]',
          snapshotUrls: 'https://i.gkd.li/import/13297466',
        },
      ],
    },
  ],
});
