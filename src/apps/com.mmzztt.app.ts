import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.mmzztt.app',
  name: '美之图',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[text="跳过"]',
      snapshotUrls: 'https://i.gkd.li/import/13258832',
    },
  ],
});
