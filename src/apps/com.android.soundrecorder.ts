import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.android.soundrecorder',
  name: '录音机',
  groups: [
    {
      key: 1,
      name: '更新提示',
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '@[text="以后再说"] + [text="立即更新"]',
      snapshotUrls: 'https://i.gkd.li/import/14140552',
    },
  ],
});
