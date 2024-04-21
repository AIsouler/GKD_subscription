import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.xiaoe.client',
  name: '小鹅通',
  groups: [
    {
      key: 1,
      name: '更新提示-版本更新弹窗',
      desc: '点击暂不更新',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      quickFind: true,
      rules: [
        {
          matches: 'FrameLayout[vid="centerPopupContainer"] [text="暂不更新"]',
          snapshotUrls: 'https://i.gkd.li/i/13832282',
        },
      ],
    },
  ],
});
