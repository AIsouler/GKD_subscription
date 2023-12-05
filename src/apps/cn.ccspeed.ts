import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'cn.ccspeed',
  name: 'CC加速器',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[text^="跳过"][text.length<=10]',
      snapshotUrls: 'https://i.gkd.li/import/13334790',
    },
    {
      key: 1,
      enable: false,
      name: '加速页-分享抽奖浮窗',
      activityIds: 'cn.ccspeed.app.MainActivity',
      quickFind: true,
      matchTime: 10000,
      resetMatch: 'activity',
      actionMaximum: 1,
      rules: [
        {
          matches:
            'FrameLayout[id="cn.ccspeed:id/float_layout"] > ImageView - ImageView',
          snapshotUrls: 'https://i.gkd.li/import/13539299',
        },
      ],
    },
  ],
});
