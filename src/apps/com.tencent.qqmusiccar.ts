import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tencent.qqmusiccar',
  name: 'QQ音乐车机版',
  groups: [
    {
      key: 1,
      name: '更新提示',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.tencent.qqmusiccar.app.activity.AppStarterActivity',
          matches: [
            '[text$="版本升级"]',
            '[vid="dialog_button_close"][clickable=true]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/23792987',
        },
      ],
    },
  ],
});
