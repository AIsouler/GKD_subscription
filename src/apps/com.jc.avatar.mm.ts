import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.jc.avatar.mm',
  name: '萌妹',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      activityIds: 'com.jc.avatar.mm.MainActivity',
      rules:
        'ImageView -2 FrameLayout > FrameLayout > FrameLayout > FrameLayout > ImageView',
      snapshotUrls: 'https://i.gkd.li/i/13188475',
    },
  ],
});
