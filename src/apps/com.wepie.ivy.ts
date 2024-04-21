import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.wepie.ivy',
  name: '青藤之恋',
  groups: [
    {
      key: 1,
      name: '评价提示-好评弹窗',
      actionMaximum: 1,
      resetMatch: 'app',
      quickFind: true,
      rules: [
        {
          key: 0,
          matches: '[text="我要吐槽"] + [text="五星好评"]',
          action: 'back',
          snapshotUrls: 'https://i.gkd.li/i/14602933',
        },
      ],
    },
  ],
});
