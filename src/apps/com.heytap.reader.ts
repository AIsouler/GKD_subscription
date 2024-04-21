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
          quickFind: true,
          matches:
            '[id="com.zhangyue.commonplugin:id/dialog_welfare_card_close"]',
          exampleUrls:
            'https://m.gkd.li/6328439/4feb19d4-f90f-4ed5-b025-9c2a6e4fc479',
          snapshotUrls: 'https://i.gkd.li/i/13387130',
        },
      ],
    },
    {
      key: 3,
      name: '局部广告-首页浮窗广告',
      rules: [
        {
          activityIds: 'com.zhangyue.iReader.bookshelf.ui.ActivityBookShelf',
          quickFind: true,
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
          activityIds: 'com.zhangyue.iReader.bookshelf.ui.ActivityBookShelf',
          quickFind: true,
          matches: '[id="com.heytap.reader:id/iv_float_read_continue_close"]',
          exampleUrls:
            'https://m.gkd.li/6328439/3ee7210c-970e-4c9a-acb6-9254245c27a0',
          snapshotUrls: 'https://i.gkd.li/i/13387159',
        },
      ],
    },
  ],
});
