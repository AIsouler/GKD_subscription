import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.p1.mobile.putong',
  name: '探探',
  groups: [
    {
      key: 1,
      name: '青少年模式',
      quickFind: true,
      resetMatch: 'app',
      actionMaximum: 1,
      rules: '@[text="我知道了"] + [text="开启青少年模式"]',
      snapshotUrls: 'https://i.gkd.li/import/14332010',
    },
  ],
});
