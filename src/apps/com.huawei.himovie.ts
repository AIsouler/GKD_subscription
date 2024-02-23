import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.huawei.himovie',
  name: '华为视频',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: {
        matches: '[id="com.huawei.hms.ads.uiengine:id/hiad_skip_text"]',
        action: 'clickCenter',
      },
      snapshotUrls: [
        'https://i.gkd.li/i/12814007',
        'https://i.gkd.li/i/12819351',
      ],
    },
  ],
});
