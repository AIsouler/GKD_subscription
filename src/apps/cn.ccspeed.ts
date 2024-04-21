import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'cn.ccspeed',
  name: 'CC加速器',
  groups: [
    {
      key: 1,
      name: '局部广告-加速页分享抽奖浮窗',
      activityIds: 'cn.ccspeed.app.MainActivity',
      quickFind: true,
      matchTime: 10000,
      resetMatch: 'activity',
      actionMaximum: 1,
      rules: [
        {
          matches:
            'FrameLayout[id="cn.ccspeed:id/float_layout"] > ImageView - ImageView',
          snapshotUrls: 'https://i.gkd.li/i/13539299',
        },
      ],
    },
  ],
});
