import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tencent.weread',
  name: '微信读书',
  groups: [
    {
      key: 1,
      name: '权限提示-通知权限',
      fastQuery: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          matchTime: 30000,
          activityIds: [
            '.module.bottomSheet.BottomSheetForFragment',
            '.WeReadFragmentActivity',
          ],
          matches: '[id="com.tencent.weread:id/open_notification_close"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12642247',
            'https://i.gkd.li/i/13233735',
          ],
        },
        {
          key: 1,
          activityIds: '.WeReadFragmentActivity',
          matches:
            '[text="开启推送通知"] +3 [clickable=true][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/14190089',
        },
      ],
    },
  ],
});
