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
    },
    {
      key: 2,
      name: '局部广告-听书播放器底部广告',
      fastQuery: true, 
      activityIds: 'com.zhangyue.iReader.bookshelf.ui.ActivityBookShelf',
      rules: [
        {
          matches: '[id="com.zhangyue.module.ad:id/close"][text="关闭"]',
          snapshotUrls: [
            'https://i.gkd.li/i/24885529',
            'https://i.gkd.li/i/24884414',
            'https://i.gkd.li/i/24882622',
          ],
        },
      ],
    },
    {
      key: 3,
      name: '局部广告-书籍阅读页间断插入广告',
      fastQuery: true,  
      rules: [
        {
          key: 0,
          name: '中间单容器单广告',
          activityIds: 'com.zhangyue.iReader.read.ui.Activity_BookBrowser_TXT',
          matches: '@ImageView[id="com.zhangyue.module.ad:id/close"][width<25 && height<25]',
          snapshotUrls: [
            'https://i.gkd.li/i/24882824',
            'https://i.gkd.li/i/24882944',
            'https://i.gkd.li/i/24887834', //真机测试发现钓鱼假x关闭按钮3个，一旦点击会弹出两个层叠充值会员页面
          ],
        },
        {
          key: 1,
          name: '大卡片广告',
          activityIds: [  
            'com.qq.e.ads.PortraitADActivity',
            'com.zhangyue.iReader.read.ui.Activity_BookBrowser_TXT',
          ],
          matches: '[text="关闭"][width<80 && height<50][clickable=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/24883183',
            'https://i.gkd.li/i/24883422',
            'https://i.gkd.li/i/24884108',
          ],
        },
      ],
    },
    {
      key: 4,
      name: '局部广告-短剧底部广告',
      fastQuery: true,
      activityIds: 'com.chaozh.iReader.dj',
      rules: [
        {
          matches: '[id="com.zhangyue.module.ad:id/close_ad"]',
          snapshotUrls: [
            'https://i.gkd.li/i/24885711',
            'https://i.gkd.li/i/24885716',
            'https://i.gkd.li/i/24885714',
          ],
        },
      ],
    },
  ],
});
