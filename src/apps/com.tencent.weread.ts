import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tencent.weread',
  name: '微信读书',
  groups: [
    {
      key: 1,
      name: '权限提示-通知权限',
      quickFind: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          matchTime: 30000,
          matches: '[id="com.tencent.weread:id/open_notification_close"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12642247',
            'https://i.gkd.li/i/13233735',
          ],
        },
        {
          key: 1,
          matches:
            '[text="开启推送通知"] +3 [clickable=true][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/14190089',
        },
      ],
    },
    {
      key: 2,
      name: '青少年模式',
      quickFind: true,
      actionMaximum: 1,
      matchTime: 30000,
      resetMatch: 'app',
      rules: '[text="设置青少年模式"] - LinearLayout >2 [text="我知道了"]',
      snapshotUrls: 'https://i.gkd.li/i/13233668',
    },
  ],
});
