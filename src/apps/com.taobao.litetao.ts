import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.taobao.litetao',
  name: '淘特',
  groups: [
    {
      key: 1,
      name: '更新提示-版本升级弹窗',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: [
            'com.taobao.ltao.maintab.MainFrameActivity',
            '.launcher.ALiFlutterActivityCompat',
          ],
          matches: '[id = "com.taobao.litetao:id/update_imageview_cancel_v2"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12843615',
            'https://i.gkd.li/i/12843614',
          ],
        },
      ],
    },
  ],
});
