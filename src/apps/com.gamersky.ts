import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.gamersky',
  name: '游民星空',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[text^="跳过"][text.length<=10]',
      snapshotUrls: [
        'https://i.gkd.li/import/12848922',
        'https://i.gkd.li/import/13038181',
      ],
    },
    {
      key: 1,
      name: '卡片式广告',
      rules: [
        {
          key: 0,
          name: '首页卡片广告',
          activityIds: 'com.gamersky.main.activity.LibMainActivity',
          quickFind: true,
          matches:
            '[id="com.gamersky:id/tap_video_ad_root"] > [id="com.gamersky:id/delete"]',
          snapshotUrls: 'https://i.gkd.li/import/13451220',
        },
        {
          key: 1,
          name: '正文底部卡片广告',
          activityIds:
            'com.gamersky.common.activity.LibDetailContentDetailActivity',
          matches: 'View[childCount=2] > [text="广告"] + View[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/import/13451258',
        },
      ],
    },
  ],
});
