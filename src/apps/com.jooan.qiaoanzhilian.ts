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
      rules: 'TextView[text^="跳过"][text.length<=10]',
      snapshotUrls: [
        'https://i.gkd.li/import/13197473',
        'https://i.gkd.li/import/import/13223790',
      ],
    },
  ],
});
