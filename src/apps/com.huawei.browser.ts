import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.huawei.browser',
  name: '华为浏览器',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: ['com.huawei.browser.BrowserMainActivity'],
      rules: [
        {
          matches: '[id$="/hiad_skip_text"]',
          action: 'clickCenter',
          snapshotUrls: [
            'https://i.gkd.li/import/12681995',
            'https://i.gkd.li/import/13403785',
          ],
        },
      ],
    },
  ],
});
