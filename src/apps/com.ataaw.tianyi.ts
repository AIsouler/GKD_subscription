import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.ataaw.tianyi',
  name: '天翼生活',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[text*="跳过"][text.length<=10]',
      snapshotUrls: 'https://i.gkd.li/import/13674443',
    },
    {
      key: 1,
      name: '版本升级',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'com.ataaw.tianyi.MainActivity',
          matches:
            '[text^="发现新版本"] < RelativeLayout + LinearLayout [id="com.ataaw.tianyi:id/ignore"]',
          snapshotUrls: 'https://i.gkd.li/import/13327303',
        },
      ],
    },
  ],
});
