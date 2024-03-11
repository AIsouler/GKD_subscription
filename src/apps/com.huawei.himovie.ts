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
      rules: [
        {
          action: 'clickCenter',
          matches: '[id="com.huawei.hms.ads.uiengine:id/hiad_skip_text"]',
          exampleUrls:
            'https://m.gkd.li/57941037/0fdba1cd-ea19-4e7e-9a1e-14781fdb5242',
          snapshotUrls: [
            'https://i.gkd.li/i/12814007',
            'https://i.gkd.li/i/12819351',
          ],
        },
      ],
    },
  ],
});
