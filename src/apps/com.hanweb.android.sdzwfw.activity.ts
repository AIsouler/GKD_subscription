import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.hanweb.android.sdzwfw.activity',
  name: '爱山东',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[text*="关闭"][text.length<=10]',
      snapshotUrls: 'https://i.gkd.li/import/13407227',
    },
  ],
});
