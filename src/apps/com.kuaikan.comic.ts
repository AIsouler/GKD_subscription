import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.kuaikan.comic',
  name: '快看漫画',
  groups: [
    {
      key: 2,
      name: '局部广告-漫画界面底部弹窗广告',
      activityIds: 'com.kuaikan.comic.infinitecomic.view.ComicInfiniteActivity',
      rules: '[id="com.kuaikan.comic:id/adBannerClose"]',
      snapshotUrls: 'https://i.gkd.li/i/12910268',
    },
  ],
});
