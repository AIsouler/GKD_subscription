import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.microsoft.emmx',
  name: 'Edge',
  groups: [
    {
      key: 3,
      name: '通知提示-请求消息通知弹窗',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      quickFind: true,
      rules: '[text="允许通知"] + [text="不，谢谢"]',
      snapshotUrls: 'https://i.gkd.li/i/13646187',
    },
    {
      key: 4,
      name: '功能类-[关闭所有标签？]弹窗',
      desc: '点击[确定]',
      rules: [
        {
          quickFind: true,
          activityIds: 'org.chromium.chrome.browser.ChromeTabbedActivity',
          matches: '[text="关闭所有标签页?"] + * > [text="确定"]',
          exampleUrls:
            'https://m.gkd.li/57941037/487f4236-676c-4fb3-bcac-17b4644edd46',
          snapshotUrls: 'https://i.gkd.li/i/14325653',
        },
      ],
    },
  ],
});
