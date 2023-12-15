import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.babycloud.hanju',
  name: '韩小圈',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches: '[text*="跳过"][text.length<=5]',
          snapshotUrls: 'https://i.gkd.li/import/13234983',
        },
      ],
    },
    {
      key: 2,
      name: '卡片式广告',
      rules: [
        {
          key: 0,
          activityIds: [
            'com.babycloud.hanju.ui.activity.HanjuSeriesActivity',
            'com.babycloud.hanju.ui.activity.HanjuHomeActivity',
          ],
          quickFind: true,
          matches:
            '[id="com.babycloud.hanju:id/unified_ad_close"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/import/13628282',
            'https://i.gkd.li/import/13670721',
          ],
        },
      ],
    },
  ],
});
