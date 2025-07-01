import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.realme.securitycheck',
  name: 'SecurityAnalysis',
  groups: [
    {
      key: 1,
      name: '局部广告-安全监测通过后的广告',
      desc: '点击关闭',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.realme.securitycheck.SecurityCheckActivity',
          matches: '[vid="ad_contain"] >5 [vid="close"][clickable=true]',
          exampleUrls:
            'https://m.gkd.li/57941037/c4a9acc9-3108-4364-8586-906b200e1171',
          snapshotUrls: 'https://i.gkd.li/i/14476628',
        },
      ],
    },
    {
      key: 2,
      name: '功能类-关闭安装应用后的安全检测',
      rules: [
        {
          fastQuery: true,
          activityIds: '.SecurityCheckActivity',
          matches: '[vid="finish"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/f8a626f2-36dd-4e3a-9ceb-70877c27330c',
          snapshotUrls: 'https://i.gkd.li/i/20592226',
        },
      ],
    },
  ],
});
