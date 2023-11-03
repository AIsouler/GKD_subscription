import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.mt.mtxx.mtxx',
  name: '美图秀秀',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[text=`跳过广告`]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/12472627',
    },
    {
      key: 1,
      name: '版本更新',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[text="升级新版客户端"] - [text="取消"][clickable=true]',
      snapshotUrls: 'https://i.gkd.li/import/13238352',
    },
  ],
});
