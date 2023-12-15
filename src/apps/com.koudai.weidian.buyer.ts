import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.koudai.weidian.buyer',
  name: '微店',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      quickFind: true,
      rules: '@[clickable=true] > [text*="跳过"][text.length<=10]',
      snapshotUrls: 'https://i.gkd.li/import/12506297',
    },
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
