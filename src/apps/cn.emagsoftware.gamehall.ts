import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'cn.emagsoftware.gamehall',
  name: '咪咕快游',
  groups: [
    {
      key: 1,
      name: '更新提示',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'com.migugame.home_module.ui.activity.HomeActivity',
          matches:
            '[id="cn.emagsoftware.gamehall:id/btn_update"] -2 [id="cn.emagsoftware.gamehall:id/btn_cancle"]',
          snapshotUrls: 'https://i.gkd.li/i/13448894',
        },
      ],
    },
  ],
});
