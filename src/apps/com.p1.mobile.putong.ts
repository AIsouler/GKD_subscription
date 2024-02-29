import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.p1.mobile.putong',
  name: '探探',
  groups: [
    {
      key: 1,
      name: '青少年模式',
      quickFind: true,
      resetMatch: 'app',
      actionMaximum: 1,
      rules: '@[text="我知道了"] + [text="开启青少年模式"]',
      snapshotUrls: 'https://i.gkd.li/i/14332010',
    },
    {
      key: 2,
      name: '更新提示',
      desc: '点击[取消]',
      matchTime: 10000,
      quickFind: true,
      resetMatch: 'app',
      actionMaximum: 1,
      rules: [
        {
          matches:
            '@[vid="buttonDefaultNeutral"][clickable=true] > [text="取消"]',
          exampleUrls:
            'https://m.gkd.li/57941037/2326365c-b31e-429a-9357-765d1c58da4c',
          snapshotUrls: 'https://i.gkd.li/i/14445054',
        },
      ],
    },
    {
      key: 3,
      name: '通知提示',
      desc: '点击[暂不设置]',
      quickFind: true,
      resetMatch: 'app',
      actionMaximum: 1,
      rules: [
        {
          matches: '[text="打开通知"] + [text="暂不设置"]',
          exampleUrls:
            'https://m.gkd.li/57941037/137e9907-9767-4acf-b803-034182346ef3',
          snapshotUrls: 'https://i.gkd.li/i/14445055',
        },
      ],
    },
  ],
});
