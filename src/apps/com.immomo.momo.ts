import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.immomo.momo',
  name: 'MOMO陌陌',
  groups: [
    {
      key: 1,
      name: '青少年模式',
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[text$="青少年模式"] + [text="知道了"]',
      snapshotUrls: 'https://i.gkd.li/i/14395028',
    },
  ],
});
