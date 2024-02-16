import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.rocoplayer.app.nm',
  name: '柠檬听书',
  groups: [
    {
      key: 1,
      name: '通知提示-温馨提示弹窗',
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[text="温馨提示"] +2 [text="确定"]',
      snapshotUrls: 'https://i.gkd.li/import/14304132',
    },
    {
      key: 2,
      name: '全屏广告',
      rules: [
        {
          key: 0,
          name: '腾讯广告',
          activityIds: 'com.e4a.runtime.android.mainActivity',
          matches:
            'ImageView - LinearLayout - FrameLayout > FrameLayout[index=2][childCount=1] > ImageView[childCount=0]',
          snapshotUrls: 'https://i.gkd.li/import/14304134',
        },
      ],
    },
  ],
});
