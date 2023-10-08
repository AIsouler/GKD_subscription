import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.heytap.browser',
  name: 'OPPO浏览器',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchLauncher: true,
      quickFind: true,
      rules: [
        {
          matches:
            '[id="android:id/content"] >3 TextView[text^="跳过"][text.length<=4]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12841168',
        },
      ],
    },
  ],
});
