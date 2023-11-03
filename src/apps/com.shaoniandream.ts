import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.shaoniandream',
  name: '少年梦阅读',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: 'View[id="com.shaoniandream:id/countdown"][clickable=true]',
      snapshotUrls: 'https://i.gkd.li/import/13236791',
    },
  ],
});
