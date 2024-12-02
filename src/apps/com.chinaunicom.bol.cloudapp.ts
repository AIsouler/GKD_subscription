import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.chinaunicom.bol.cloudapp',
  name: '联通云盘',
  groups: [
    {
      key: 1,
      name: '更新提示',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      desc: '点击取消',
      rules: [
        {
          matches: '[vid="update_button_cancel"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/13998612',
        },
      ],
    },
  ],
});
