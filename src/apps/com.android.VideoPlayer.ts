import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.android.VideoPlayer',
  name: 'i 视频',
  groups: [
    {
      key: 1,
      name: '青少年模式',
      quickFind: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[vid="child_mode_cancel_button"]',
      snapshotUrls: 'https://i.gkd.li/i/13849807',
    },
  ],
});
