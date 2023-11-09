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
          matches: '[id="com.huawei.hms.ads.uiengine:id/hiad_skip_text"]',
          action: 'clickCenter',
          snapshotUrls: ['https://i.gkd.li/import/import/12681995'],
        },
      ],
    },
  ],
});
