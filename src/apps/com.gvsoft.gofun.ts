import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.gvsoft.gofun',
  name: 'GoFun出行',
  groups: [
    {
      key: 5,
      name: '广告弹窗',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: 'com.gvsoft.gofun.module.home.activity.HomeActivity',
      rules: [
        {
          action: 'clickCenter',
          matches:
            '[id="com.gvsoft.gofun:id/cardView"] + [id="com.gvsoft.gofun:id/iv_close"]',
        },
      ],
      snapshotUrls: 'https://i.gkd.li/import/13497777',
    },
  ],
});
