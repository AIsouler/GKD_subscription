import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.kuaikan.comic',
  name: '快看漫画',
  groups: [
    {
      key: 1,
      name: '青少年模式',
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[text*="青少年模式"] +2 [id="com.kuaikan.comic:id/cancel"]',
      snapshotUrls: 'https://i.gkd.li/i/12565678',
    },
    {
      key: 2,
      name: '局部广告-漫画界面底部广告弹窗',
      activityIds: 'com.kuaikan.comic.infinitecomic.view.ComicInfiniteActivity',
      rules: '[id="com.kuaikan.comic:id/adBannerClose"]',
      snapshotUrls: 'https://i.gkd.li/i/12910268',
    },
  ],
});
