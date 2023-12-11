import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'cn.medlive.android',
  name: '医脉通',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[id="cn.medlive.android:id/tv_skip"]',
      snapshotUrls: 'https://i.gkd.li/import/13625394',
    },
  ],
});
