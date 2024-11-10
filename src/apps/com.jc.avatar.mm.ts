import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.jc.avatar.mm',
  name: '萌妹',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      fastQuery: true,
      activityIds: 'com.jc.avatar.mm.MainActivity',
      rules:
        '@ImageView[childCount=0][text=null][visibleToUser=true] < FrameLayout[childCount=1] <2 FrameLayout[childCount=2] <2 FrameLayout[childCount=2] <2 FrameLayout[childCount=2] - FrameLayout > [text^="扭动或点击"]',
      snapshotUrls: 'https://i.gkd.li/i/13188475',
    },
  ],
});
