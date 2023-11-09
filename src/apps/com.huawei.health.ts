import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.huawei.health',
  name: '华为运动健康',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      quickFind: true,
      rules: [
        {
          key: 0,
          matches: '[id$="hiad_skip_text"]',
          action: 'clickCenter',
          snapshotUrls: [
            'https://i.gkd.li/import/import/12667766',
            'https://i.gkd.li/import/import/13215012',
            'https://i.gkd.li/import/13228290',
          ],
        },
      ],
    },
    {
      key: 1,
      name: '“我的”页会员广告',
      activityIds: ['com.huawei.health.MainActivity'],
      rules: [
        {
          matches: '[id="com.huawei.health:id/item_banner_ad_close_icon"]',
          snapshotUrls: ['https://i.gkd.li/import/import/12667814'],
        },
      ],
    },
  ],
});
