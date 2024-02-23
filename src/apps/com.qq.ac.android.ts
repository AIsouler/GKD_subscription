import { defineAppConfig } from '../types';

export default defineAppConfig({
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
      snapshotUrls: ['https://i.gkd.li/i/12707756'],
    },
  ],
});
