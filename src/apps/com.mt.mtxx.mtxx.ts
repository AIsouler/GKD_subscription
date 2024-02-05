import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.mt.mtxx.mtxx',
  name: '美图秀秀',
  groups: [
    {
      key: 1,
      name: '更新提示',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[text="升级新版客户端"] - [text="取消"][clickable=true]',
      snapshotUrls: 'https://i.gkd.li/import/13238352',
    },
  ],
});
