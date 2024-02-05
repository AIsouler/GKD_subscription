import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.tencent.weread',
  name: '微信读书',
  groups: [
    {
      key: 1,
      name: '通知提示-请求系统推送弹窗',
      desc: '点击取消',
      quickFind: true,
      actionMaximum: 1,
      matchTime: 30000,
      resetMatch: 'app',
      activityIds: [
        'com.tencent.weread.module.bottomSheet.BottomSheetForFragment',
        'com.tencent.weread.WeReadFragmentActivity',
      ],
      rules: [
        {
          matches: '[id="com.tencent.weread:id/open_notification_close"]',
          snapshotUrls: [
            'https://i.gkd.li/import/12642247',
            'https://i.gkd.li/import/13233735',
          ],
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
      activityIds: 'com.tencent.weread.WeReadFragmentActivity',
      rules: '[text="设置青少年模式"] - LinearLayout >2 [text="我知道了"]',
      snapshotUrls: 'https://i.gkd.li/import/13233668',
    },
  ],
});
