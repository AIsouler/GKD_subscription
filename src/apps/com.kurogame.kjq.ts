import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.kurogame.kjq',
  name: '库街区',
  groups: [
    {
      key: 1,
      name: '功能类-自动签到',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: 'com.kurogame.kjq.MainActivity',
      rules: [
        {
          key: 0,
          matches: '[vid="sign_click"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/15521224',
        },
        {
          preKeys: [0],
          key: 1,
          matches: '[vid="bt_close"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/15521225',
        },
      ],
    },
  ],
});
