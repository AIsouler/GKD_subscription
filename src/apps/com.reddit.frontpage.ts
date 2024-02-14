import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.reddit.frontpage',
  name: 'Reddit',
  groups: [
    {
      enable: false,
      key: 3,
      name: '更新提示-社区消息',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches: '[id="com.reddit.frontpage:id/cancel_button"]',
          snapshotUrls: 'https://i.gkd.li/import/13649914',
        },
      ],
    },
    {
      key: 4,
      name: '功能类-NSFW 内容提示',
      desc: '自动点击 continue',
      quickFind: true,
      enable: false,
      rules: [
        {
          activityIds: 'com.reddit.launch.main.MainActivity',
          matches: 'Button[text="Cancel"] + Button[text="Continue"]',
          snapshotUrls: 'https://i.gkd.li/import/13649992',
        },
      ],
    },
  ],
});
