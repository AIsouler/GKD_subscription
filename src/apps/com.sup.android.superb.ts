import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.sup.android.superb',
  name: '皮皮虾',
  groups: [
    {
      key: 6,
      name: '右上角红包悬浮窗',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: 'com.sup.android.base.MainActivity',
      rules:
        'FrameLayout > RelativeLayout > @ImageView[clickable=true] + ImageView',
      snapshotUrls: 'https://i.gkd.li/import/13624220',
    },
  ],
});
