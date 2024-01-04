import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.upupoo.apu.mobile',
  name: 'UPUPOO动态壁纸',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      resetMatch: 'app',
      actionMaximum: 1,
      rules: '[id="android:id/content"] >n FrameLayout[childCount=4] > View',
      snapshotUrls: 'https://i.gkd.li/import/13830230',
    },
  ],
});
