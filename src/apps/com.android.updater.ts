import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.android.updater',
  name: '系统更新',
  groups: [
    {
      key: 0,
      name: '功能类-不开启自动更新',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: ['.MainActivity', '.UpdateActivity'],
          matches: [
            '[vid="alertTitle"][text="开启智能更新" || text="Install automatically?"]',
            '[id="android:id/button2"][text="暂不开启" || text="No"]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/15386937',
            'https://i.gkd.li/i/15386869',
            'https://i.gkd.li/i/18469146',
          ],
        },
      ],
    },
  ],
});
