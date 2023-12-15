import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.jjwxc.reader',
  name: '晋江小说阅读	',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      quickFind: true,
      rules: [
        {
          matches: '[id="com.jjwxc.reader:id/ad_pass_icon"]',
          snapshotUrls: 'https://i.gkd.li/import/13662836',
        },
      ],
    },
  ],
});
