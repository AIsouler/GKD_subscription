import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'org.daimhim.zzzfun',
  name: 'ZzzFun',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      activityIds: 'org.daimhim.zzzfun.ui.home.video.VideoDetailsActivity',
      rules: 'ImageView -2 ImageView + FrameLayout > ImageView',
      snapshotUrls: 'https://i.gkd.li/i/13402608',
    },
  ],
});
