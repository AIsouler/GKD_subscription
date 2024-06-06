import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tmri.app.main',
  name: '交管12123',
  groups: [
    {
      key: 1,
      name: '权限提示-通知权限',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
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
          quickFind: true,
          activityIds: 'com.tmri.app.ui.activity.main.MainTabHostNewActivity',
          matches: ['[text="是否确认退出?"]', '[text="确认"]'],
          snapshotUrls: 'https://i.gkd.li/i/15597285',
        },
      ],
    },
  ],
});
