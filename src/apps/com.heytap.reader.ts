import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.heytap.reader',
  name: '阅读',
  groups: [
    {
      key: 2,
      name: '全屏广告-首页弹窗广告',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.zhangyue.iReader.bookshelf.ui.ActivityBookShelf',
          matches:
            '[id="com.zhangyue.commonplugin:id/dialog_welfare_card_close"]',
          exampleUrls: 'https://e.gkd.li/76f226bb-fcd4-439a-9eed-520a9c35a0c0',
          snapshotUrls: 'https://i.gkd.li/i/19890575',
        },
      ],
    },
    {
      key: 3,
      name: '局部广告-首页浮窗广告',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.zhangyue.iReader.bookshelf.ui.ActivityBookShelf',
          matches: '[id="com.heytap.reader:id/float_delete"]',
          exampleUrls:
            'https://m.gkd.li/6328439/860371ea-1f09-4f82-8ed6-1436eca4a50d',
          snapshotUrls: 'https://i.gkd.li/i/13387138',
        },
      ],
    },
    {
      key: 4,
      name: '局部广告-今日推荐',
      rules: [
        {
          fastQuery: true,
          matchTime: 10000,
          actionMaximum: 1,
          resetMatch: 'app',
          activityIds: 'com.zhangyue.iReader.bookshelf.ui.ActivityBookShelf',
          matches: '[id="com.heytap.reader:id/iv_float_read_continue_close"]',
          exampleUrls:
            'https://m.gkd.li/6328439/3ee7210c-970e-4c9a-acb6-9254245c27a0',
          snapshotUrls: 'https://i.gkd.li/i/13387159',
        },
      ],
    },
  ],
});
