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
    {
      key: 5,
      name: '功能类-关闭标签页',
      rules: [
        {
          quickFind: true,
          activityIds: 'org.chromium.chrome.browser.ChromeTabbedActivity',
          matches: '[text="关闭标签页"]',
          exampleUrls:
            'https://m.gkd.li/57941037/81f9a737-a111-4630-898b-4f2b5de0623b',
          snapshotUrls: 'https://i.gkd.li/i/14614992',
        },
      ],
    },
    {
      key: 6,
      name: '功能类-[前往CSDN APP阅读全文]弹窗',
      desc: '点击[继续]',
      rules: [
        {
          activityIds: 'org.chromium.chrome.browser.ChromeTabbedActivity',
          matches:
            '[text="前往CSDN APP阅读全文"] < * > [desc="继续"][clickable=true]',
          exampleUrls:
            'https://m.gkd.li/57941037/fea75b5a-010d-4f67-8998-6cf794eda975',
          snapshotUrls: 'https://i.gkd.li/i/14610025',
        },
      ],
    },
  ],
});
