import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tencent.weread',
  name: '微信读书',
  groups: [
    {
      key: 1,
      name: '通知提示-开启推送通知',
      rules: [
        {
          key: 0,
          name: '通知提示-开启推送通知提示弹窗',
          quickFind: true,
          actionMaximum: 1,
          matchTime: 30000,
          resetMatch: 'app',
          matches: '[id="com.tencent.weread:id/open_notification_close"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12642247',
            'https://i.gkd.li/i/13233735',
          ],
        },
        {
          key: 1,
          name: '通知提示-开启推送通知提示信息',
          actionMaximum: 1,
          resetMatch: 'app',
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
