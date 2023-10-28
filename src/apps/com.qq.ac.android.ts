import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.qq.ac.android',
  name: '腾讯动漫',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[id="com.qq.ac.android:id/text_ad_logo"] + [text="跳过"]',
      snapshotUrls: [
        'https://gkd-kit.gitee.io/import/12707750', //com.qq.ac.android.splash.SplashActivity
        'https://gkd-kit.gitee.io/import/13195632', //com.qq.ac.android.splash.SplashHotActivity
      ],
    },
    {
      key: 1,
      name: '青少年模式弹窗',
      activityIds: ['com.qq.ac.android.main.MainActivity'],
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[text="青少年守护模式"] - [id="com.qq.ac.android:id/close_btn"]',
      snapshotUrls: [
        'https://gkd-kit.gitee.io/import/12707752',
        'https://gkd-kit.gitee.io/import/13195636',
      ],
    },
    {
      key: 2,
      name: '漫画阅读页面-左侧悬浮广告',
      activityIds: 'com.qq.ac.android.reader.comic.ComicReaderActivity',
      rules:
        '[id="com.qq.ac.android:id/operation_ad_view"] > [id="com.qq.ac.android:id/btn_close"]',
      snapshotUrls: ['https://gkd-kit.gitee.io/import/12707756'],
    },
  ],
});
