import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.ruYUVE.bgGRHf',
  name: '水果派',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          forcedTime: 10000, // 该软件开屏广告5秒后才出现跳过按钮
          matches: '[desc="关闭广告"]',
          snapshotUrls: 'https://i.gkd.li/i/14667107',
        },
      ],
    },
  ],
});
