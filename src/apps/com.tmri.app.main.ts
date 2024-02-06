import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.tmri.app.main',
  name: '交管12123',
  groups: [
    {
      key: 1,
      name: '通知提示-请求通知弹窗',
      quickFind: true,
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
            'https://i.gkd.li/import/13315944', //com.tmri.app.ui.activity.main.MainTabHostNewActivity
            'https://i.gkd.li/import/13779215', //com.tmri.app.ui.activity.main.TmriNewActivity
          ],
        },
      ],
    },
  ],
});
