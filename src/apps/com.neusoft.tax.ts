import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.neusoft.tax',
  name: '楚税通',
  groups: [
    {
      key: 1,
      name: '更新提示',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          position: {
            left: 'width * 0.2528',
            top: 'width * 0.0842',
          },
          activityIds: 'io.dcloud.PandoraEntryActivity',
          matches: 'WebView[childCount=4] >2 [text="以后再说立即体验"]',
          exampleUrls:
            'https://m.gkd.li/57941037/7496414a-c742-4689-ad1b-60d903b90d52',
          snapshotUrls: 'https://i.gkd.li/i/15362911',
        },
      ],
    },
  ],
});
