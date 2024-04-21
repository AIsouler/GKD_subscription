import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.sjmly.sjmtask.xsh',
  name: '小柿子',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      rules: [
        {
          key: 0,
          name: '腾讯广告',
          activityIds: 'com.sjmly.sjmtask.xsh.MainActivity',
          matches:
            'ImageView - FrameLayout > FrameLayout[childCount=1][index=2] > ImageView[childCount=0]',
          snapshotUrls: 'https://i.gkd.li/i/13761173',
        },
      ],
    },
  ],
});
