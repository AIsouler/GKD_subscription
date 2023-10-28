import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.MobileTicket',
  name: '铁路12306',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      quickFind: true,
      rules: '[id=`com.MobileTicket:id/tv_skip`]',
      snapshotUrls: 'https://i.gkd.li/import/13196243',
    },
  ],
});
