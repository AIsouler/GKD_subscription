import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'cn.medlive.guideline.android',
  name: '临床指南',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[id="cn.medlive.guideline.android:id/textSkip"]',
      snapshotUrls: 'https://i.gkd.li/import/13625397',
    },
  ],
});
