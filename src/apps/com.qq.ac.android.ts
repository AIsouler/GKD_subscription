import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.qq.ac.android',
  name: '腾讯动漫',
  groups: [
    {
      key: 1,
      name: '青少年模式',
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[text="青少年守护模式"] - [id="com.qq.ac.android:id/close_btn"]',
      snapshotUrls: [
        'https://i.gkd.li/i/12707752',
        'https://i.gkd.li/i/13195636',
      ],
    },
    {
      key: 2,
      name: '局部广告-漫画阅读页面-左侧悬浮广告',
      activityIds: 'com.qq.ac.android.reader.comic.ComicReaderActivity',
      rules:
        '[id="com.qq.ac.android:id/operation_ad_view"] > [id="com.qq.ac.android:id/btn_close"]',
      snapshotUrls: 'https://i.gkd.li/i/12707756',
    },
    {
      key: 3,
      name: '局部广告-信息流广告',
      desc: '点击关闭',
      rules: [
        {
          key: 0,
          name: '漫画章节之间的广告',
          quickFind: true,
          activityIds: 'com.qq.ac.android.reader.comic.ComicReaderActivity',
          matches: '[vid="iv_del"]',
          exampleUrls:
            'https://m.gkd.li/57941037/1be7564d-f6c2-429d-9cb0-3d923adafc8a',
          snapshotUrls: 'https://i.gkd.li/i/14730335',
        },
      ],
    },
  ],
});
