import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.android.bankabc',
  name: '中国农业银行',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      actionMaximumKey: 0,
      rules: [
        {
          key: 0,
          matches: '[id="com.android.bankabc:id/close"]',
          exampleUrls:
            'https://m.gkd.li/57941037/67cfc2f8-a108-4382-976a-0da7d13764e9',
          snapshotUrls: 'https://i.gkd.li/i/14179162',
        },
        {
          key: 1,
          matches:
            '[childCount=0][visibleToUser=true][(text.length<10&&(text*="跳过"||text*="跳过"||text*="skip"||text*="Skip")) || id$="tt_splash_skip_btn" || vid*="skip" || vid*="Skip" || (vid*="count" && vid*="down" && vid!*="download") || desc*="跳过" || desc*="skip"]',
        },
      ],
    },
    {
      key: 2,
      name: '更新提示',
      quickFind: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[vid="upgrade_bottom"] > [vid="negativeTextView"]',
      snapshotUrls: 'https://i.gkd.li/i/14208545',
    },
    {
      key: 3,
      name: '权限提示-定位权限',
      quickFind: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[text="允许获取位置信息"] +n * > [text="取消"]',
      snapshotUrls: 'https://i.gkd.li/i/14208572',
    },
    {
      key: 4,
      name: '权限提示-通知权限',
      quickFind: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[vid="iv_notification_reminder_dialog_close"]',
      snapshotUrls: 'https://i.gkd.li/i/14208621',
    },
  ],
});
