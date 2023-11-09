import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.wzwh.bzpaipan',
  name: '问真八字排盘',
  groups: [
    {
      key: 3,
      name: '全屏广告',
      quickFind: true,
      activityIds: 'com.qq.e.ads.PortraitADActivity',
      rules:
        '@ImageView[clickable=true] < LinearLayout[childCount=1] <2 FrameLayout[childCount=2] < [id="android:id/content"][childCount=1]',
      snapshotUrls: 'https://i.gkd.li/import/import/13162912',
    },
  ],
});
