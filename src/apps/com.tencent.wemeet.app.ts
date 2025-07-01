import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tencent.wemeet.app',
  name: '腾讯会议',
  groups: [
    {
      key: 1,
      name: '更新提示',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.StartupActivity',
          matches: '[text^="腾讯会议新版本"] +3 * > [text="下次安装"]',
          snapshotUrls: 'https://i.gkd.li/i/14332625',
        },
      ],
    },
  ],
});
