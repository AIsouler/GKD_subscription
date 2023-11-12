import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.tmri.app.main',
  name: '交管12123',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.tmri.app.ui.activity.main.TmriNewActivity',
      rules: '[id="com.tmri.app.main:id/tv_timer"][text^="跳过"]',
      snapshotUrls: 'https://i.gkd.li/import/12767813',
    },
    {
      key: 1,
      name: '消息通知',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      rules: [
        {
          activityIds: 'com.tmri.app.ui.activity.main.MainTabHostNewActivity',
          matches: 'ImageButton[id=\'com.tmri.app.main:id/btn_cancel\']',
          snapshotUrls: 'https://i.gkd.li/import/13315944',
        },
      ],
    },
  ],
});
