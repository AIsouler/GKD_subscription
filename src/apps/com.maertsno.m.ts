import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.maertsno.m',
  name: 'OnStream',
  groups: [
    {
      key: 1,
      name: '全屏广告弹窗',
      quickFind: true,
      activityIds: 'co.notix.interstitial.InterstitialActivity',
      rules: '[vid="tv_button"]',
      snapshotUrls: 'https://i.gkd.li/import/13842558',
    },
  ],
});
