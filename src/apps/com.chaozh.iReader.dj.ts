import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.chaozh.iReader.dj',
  name: '得间免费小说',
  groups: [
    {
      key: 1,
      name: '局部广告',
      rules: [
        {
          key: 1,
          fastQuery: true,
          activityIds: [
            'com.qq.e.ads.PortraitADActivity',
            'com.zhangyue.iReader.read.ui.Activity_BookBrowser_TXT',
          ],
          matches:
            '@[id*="ad_close"] - LinearLayout >(5,6) [text="广告"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/24879639',
            'https://i.gkd.li/i/24879692',
            'https://i.gkd.li/i/24879766',
          ],
        },
        {
          key: 2,
          fastQuery: true,
          activityIds: 'com.zhangyue.iReader.bookshelf.ui.ActivityBookShelf',
          matches:
            '@ImageView[clickable=true][childCount=0][width<50 && height<50] < FrameLayout <2 [id="android:id/content"]',
          snapshotUrls: [
            'https://i.gkd.li/i/24880989',
            'https://i.gkd.li/i/24881759',
          ],
        },
        {
          key: 3,
          fastQuery: true,
          activityIds: [
            'com.zhangyue.iReader.ui.activity.ActivityContainer',
            'com.zhangyue.iReader.bookshelf.ui.ActivityBookShelf',
            'com.zhangyue.iReader.read.ui.Activity_BookBrowser_TXT',
          ],
          matches:
            '@[text="关闭"][clickable=true] <<n [id="com.zhangyue.module.ad:id/mix_ad_view" || id="com.zhangyue.module.ad:id/ad_splash_ad_layout"]',
          snapshotUrls: [
            'https://i.gkd.li/i/24884414',
            'https://i.gkd.li/i/24882622',
            'https://i.gkd.li/i/24883183',
          ],
        },
        {
          key: 4,
          fastQuery: true,
          activityIds: 'com.qq.e.ads.PortraitADActivity',
          matches:
            '[text$="了解更多"] <<n [id="android:id/content"] + [text="关闭"][clickable=true][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/24909685',
        },
        {
          key: 5,
          fastQuery: true,
          activityIds: [
            'com.zhangyue.app.shortplay.player.ui.activity.EpisodesSetPlayActivity',
            'com.zhangyue.iReader.read.ui.Activity_BookBrowser_TXT',
          ],
          matches:
            '[id="com.zhangyue.module.ad:id/close_ad" || id="com.zhangyue.module.ad:id/ad_close_2"]',
          snapshotUrls: [
            'https://i.gkd.li/i/24885716',
            'https://i.gkd.li/i/24888022',
          ],
        },
      ],
    },

    // 存在无法解决的误触问题
    // {
    //   key: 3,
    //   name: '局部广告-书籍阅读页间断插入广告', //可点击，但是容易被骗。。。
    //   fastQuery: true,
    //   rules: [
    //     {
    //       key: 0,
    //       name: '中间单容器单广告',
    //       activityIds: 'com.zhangyue.iReader.read.ui.Activity_BookBrowser_TXT',
    //       matches:
    //         '@ImageView[id="com.zhangyue.module.ad:id/close"][width<25 && height<25]',
    //       snapshotUrls: [
    //         'https://i.gkd.li/i/24882824',
    //         'https://i.gkd.li/i/24882944',
    //         'https://i.gkd.li/i/24887834', //真机测试发现钓鱼假x关闭按钮3个，一旦点击会弹出两个层叠充值会员页面
    //         'https://i.gkd.li/i/24888200', //结果图
    //         'https://i.gkd.li/i/24888204',
    //       ],
    //     },
    //   ],
    // },
  ],
});
