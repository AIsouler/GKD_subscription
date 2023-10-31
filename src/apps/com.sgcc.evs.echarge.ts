import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.sgcc.evs.echarge',
  name: 'e充电',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[id="com.sgcc.evs.echarge:id/tv_countdown"][text^="跳过"]',
      snapshotUrls: 'https://i.gkd.li/import/13213926',
    },
  ],
});
