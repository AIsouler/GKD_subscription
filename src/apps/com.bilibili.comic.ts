import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.bilibili.comic',
  name: '哔哩哔哩漫画',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      activityIds: 'com.bilibili.comic.splash.view.activity.SplashActivity',
      rules: '[id="com.bilibili.comic:id/btn_full_ad_skip"]',
      snapshotUrls: ['https://inspect.gkd.li/import/13063673'],
    },
    {
      key: 1,
      name: '青少年模式弹窗',
      quickFind: true,
      activityIds: 'com.lbe.security.ui.CountdownDialogActivity',
      rules: '[id="com.bilibili.comic:id/tv_know"]',
      snapshotUrls: ['https://inspect.gkd.li/import/13063676'],
    },
  ],
});
