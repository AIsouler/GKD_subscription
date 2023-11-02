import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.android.tiku.union',
  name: '快题库',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[id="com.android.tiku.union:id/tv_skip"][text^="跳过"]',
      snapshotUrls: 'https://i.gkd.li/import/13227540',
    },
  ],
});
