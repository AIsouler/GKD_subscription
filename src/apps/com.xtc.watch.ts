import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.xtc.watch',
  name: '小天才',
  groups: [
    {
      key: 3,
      name: '开启通知提醒',
      quickFind: true,
      activityIds: [
        'com.xtc.widget.phone.popup.activity.CustomActivity13',
        'com.xtc.watch.view.home.activity.XtcHomeActivity',
      ],
      rules: [
        {
          matches: [
            '[id="com.xtc.watch:id/iv_notify_permission_close"]',
            '[id="com.xtc.watch:id/iv_close"]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/import/13059965',
            'https://i.gkd.li/import/13063274',
          ],
        },
      ],
    },
  ],
});
