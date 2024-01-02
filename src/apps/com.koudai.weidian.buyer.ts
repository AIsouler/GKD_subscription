import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.koudai.weidian.buyer',
  name: '微店',
  groups: [
    {
      key: 6,
      name: '首页红包弹窗',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: 'com.vdian.android.wdb.main.ui.activity.MainTabsActivity',
      rules:
        'FrameLayout > FrameLayout > RelativeLayout > ImageView[clickable=true][index=1]',
      snapshotUrls: 'https://i.gkd.li/import/13646151',
    },
  ],
});
