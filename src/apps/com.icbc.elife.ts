import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.icbc.elife',
  name: '工银e生活',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '@RelativeLayout > [text="跳过"]',
      snapshotUrls: 'https://i.gkd.li/import/13399176',
    },
  ],
});
