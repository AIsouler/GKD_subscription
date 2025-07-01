import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tmri.app.main',
  name: '交管12123',
  groups: [
    {
      key: 1,
      name: '权限提示-通知权限',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: [
            'com.tmri.app.ui.activity.main.MainTabHostNewActivity',
            'com.tmri.app.ui.activity.main.TmriNewActivity',
          ],
          matches: 'ImageButton[id="com.tmri.app.main:id/btn_cancel"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13315944',
            'https://i.gkd.li/i/13779215',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '功能类-确认退出',
      desc: '点击[确认]',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.tmri.app.ui.activity.main.MainTabHostNewActivity',
          matches: ['[text="是否确认退出?"]', '[text="确认"]'],
          snapshotUrls: 'https://i.gkd.li/i/15597285',
        },
      ],
    },
    {
      key: 3,
      name: '更新提示',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'com.tmri.app.ui.activity.main.MainTabHostNewActivity',
          matches: ['[text="立即更新"]', '[text="以后再说"]'],
          snapshotUrls: 'https://i.gkd.li/i/15751656',
        },
      ],
    },
  ],
});
