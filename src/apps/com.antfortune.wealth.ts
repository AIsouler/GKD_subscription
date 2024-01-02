import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.antfortune.wealth',
  name: '蚂蚁财富',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      resetMatch: 'app',
      actionMaximum: 1,
      matchTime: 10000,
      quickFind: true,
      rules:
        '@View[clickable=true] <2 [id="com.antfortune.wealth:id/welcome_page"]',
      snapshotUrls: 'https://i.gkd.li/import/12776577',
    },
  ],
});
