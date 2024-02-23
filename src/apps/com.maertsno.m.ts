import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.maertsno.m',
  name: 'OnStream',
  groups: [
    {
      key: 1,
      name: '全屏广告',
      quickFind: true,
      activityIds: 'co.notix.interstitial.InterstitialActivity',
      rules: '[vid="tv_button"]',
      snapshotUrls: 'https://i.gkd.li/i/13842558',
    },
  ],
});
