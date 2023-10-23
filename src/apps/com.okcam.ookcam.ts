import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.okcam.ookcam',
  name: '小鹰看看',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchLauncher: true,
      quickFind: true,
      activityIds: 'com.okcam.ookcam.SplashActivity',
      rules: [
        {
          matches: '[text^="跳过"][text.length<=3]',
          snapshotUrls: [
            'https://gkd-kit.gitee.io/import/13066267',
            'https://gkd-kit.gitee.io/import/13066200',
          ],
        },
      ],
    },
  ],
});
