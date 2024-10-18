import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.hanweb.android.sdzwfw.activity',
  name: '爱山东',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: '[text*="关闭"][text.length<=10]',
      snapshotUrls: 'https://i.gkd.li/i/13407227',
    },
  ],
});
