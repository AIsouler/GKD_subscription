import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.bw30.zsch',
  name: '四川航空',
  groups: [
    {
      key: 1,
      name: '更新提示',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[id="com.bw30.zsch:id/tv_cancel"]',
      snapshotUrls: ['https://i.gkd.li/i/13068699'],
    },
  ],
});
