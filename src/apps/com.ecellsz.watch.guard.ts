import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.ecellsz.watch.guard',
  name: '乐康守护',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      resetMatch: 'app',
      actionMaximum: 1,
      quickFind: true,
      rules: 'View[clickable=true] <<n [vid="splash_container"]',
      snapshotUrls: 'https://i.gkd.li/i/14039510',
    },
  ],
});
