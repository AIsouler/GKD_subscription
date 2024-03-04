import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.realme.securitycheck',
  name: 'SecurityAnalysis',
  groups: [
    {
      key: 1,
      name: '局部广告-安全监测通过后的广告',
      desc: '点击关闭',
      rules: [
        {
          quickFind: true,
          activityIds: 'com.realme.securitycheck.SecurityCheckActivity',
          matches: '[vid="ad_contain"] >5 [vid="close"][clickable=true]',
          exampleUrls:
            'https://m.gkd.li/57941037/c4a9acc9-3108-4364-8586-906b200e1171',
          snapshotUrls: 'https://i.gkd.li/i/14476628',
        },
      ],
    },
  ],
});
