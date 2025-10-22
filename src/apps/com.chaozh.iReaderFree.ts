import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.chaozh.iReaderFree',
  name: '掌阅',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          fastQuery: true,
          action: 'clickCenter', // clickNode无效
          matches: '[text*="跳过"][text.length<10][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/84df4bd7-bdf9-4b34-bb3c-57dfe9c09454',
          snapshotUrls: 'https://i.gkd.li/i/23046697',
        },
      ],
    },
    {
      key: 1,
      name: '更新提示',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'com.zhangyue.iReader.bookshelf.ui.ActivityBookShelf',
          matches: '[vid="dialog_public_top_bar_title_close"]',
          snapshotUrls: 'https://i.gkd.li/i/16549332',
        },
      ],
    },
  ],
});
