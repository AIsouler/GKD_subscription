import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.chaozh.iReader',
  name: 'VIVO 电子书',
  groups: [
    {
      key: 1,
      name: '权限提示',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches: 'Button[text="前往开启"] - Button[text="取消"]',
          snapshotUrls: 'https://i.gkd.li/i/13627649',
        },
      ],
    },
    {
      key: 2,
      name: '权限提示-通知权限',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      excludeActivityIds:
        'com.zhangyue.iReader.read.ui.Activity_BookBrowser_TXT',
      rules: [
        {
          matches:
            '@ImageView[clickable=true] +(1,2) TextView[text="开启推送通知"]',
          snapshotUrls: 'https://i.gkd.li/i/13837961',
        },
      ],
    },
  ],
});
