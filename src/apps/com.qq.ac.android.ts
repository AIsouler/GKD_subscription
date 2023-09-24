import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.qq.ac.android',
  name: '腾讯动漫',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.qq.ac.android.splash.SplashActivity',
      rules: '[id="com.qq.ac.android:id/text_ad_logo"] + [text="跳过"]',
      snapshotUrls: ['https://gkd-kit.gitee.io/import/12707750'],
    },
    {
      key: 1,
      name: '青少年模式弹窗',
      activityIds: 'com.qq.ac.android.view.fragment.dialog',
      rules: '@[id="com.qq.ac.android:id/close_btn"] + [text="青少年守护模式"]',
      snapshotUrls: ['https://gkd-kit.gitee.io/import/12707752'],
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
