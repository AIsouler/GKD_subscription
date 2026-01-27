import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.chaozh.iReader.dj',
  name: '得间免费小说',
  groups: [
    {
      key: 0,
      name: '局部广告-小说内下方悬浮广告',
      fastQuery: true,
      actionDelay: 300,
      activityIds: 'com.zhangyue.iReader.read.ui.Activity_BookBrowser_TXT',
      rules: [
        {
          matches: '@ImageView[id="com.zhangyue.module.ad:id/ad_close_2"][width=45 && height=24]',
          snapshotUrls: [
            'https://i.gkd.li/i/24879639',
            'https://i.gkd.li/i/24879692',
            'https://i.gkd.li/i/24879766',
          ],
        },
      ],
    },
    {
      key: 1,
      name: '功能类-首页悬浮小红包',
      desc: '关掉它',
      fastQuery: true,
      activityIds: 'com.zhangyue.iReader.bookshelf.ui.ActivityBookShelf',
      rules: [
        {
          matches: '@ImageView < FrameLayout <2 [id="android:id/content"]',
          snapshotUrls: [
            'https://i.gkd.li/i/24880989',
            'https://i.gkd.li/i/24881759',
          ],
        },
      ],
    }
  ],
});
