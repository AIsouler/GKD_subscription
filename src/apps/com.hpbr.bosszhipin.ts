import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.hpbr.bosszhipin',
  name: 'BOSS直聘',
  groups: [
    {
      key: 0,
      name: '通知提示-通知权限授权弹窗',
      activityIds: [
        'com.hpbr.bosszhipin.module.main.activity.MainActivity',
        'com.hpbr.bosszhipin.module.launcher.WelcomeActivity',
      ],
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'activity',
      rules: [
        {
          matches: '@ImageView[id="com.hpbr.bosszhipin:id/iv_cancle"]',
          snapshotUrls: [
            'https://i.gkd.li/import/13440781',
            'https://i.gkd.li/import/13623476',
          ],
        },
      ],
    },
  ],
});
