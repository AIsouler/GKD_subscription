import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.wisedu.cpdaily',
  name: '今日校园',
  groups: [
    {
      key: 2,
      name: '更新提示',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      quickFind: true,
      rules:
        '[id="com.wisedu.cpdaily:id/btn_update"] + [id="com.wisedu.cpdaily:id/tv_ignore"]',
      snapshotUrls: 'https://i.gkd.li/i/13643565',
    },
  ],
});
