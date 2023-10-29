import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.jooan.qiaoanzhilian',
  name: '乔安智联',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: 'TextView[text="跳过"]',
      snapshotUrls: 'https://i.gkd.li/import/13197473',
    },
  ],
});
