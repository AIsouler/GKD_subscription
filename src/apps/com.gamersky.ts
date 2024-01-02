import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.gamersky',
  name: '游民星空',
  groups: [
    {
      key: 1,
      name: '卡片式广告',
      rules: [
        {
          key: 0,
          name: '首页卡片广告',
          activityIds: 'com.gamersky.main.activity.LibMainActivity',
          quickFind: true,
          matches: '[text="广告"] < * + [id="com.gamersky:id/delete"]',
          snapshotUrls: [
            'https://i.gkd.li/import/13451220',
            'https://i.gkd.li/import/13635580',
          ],
        },
        {
          key: 1,
          name: '正文底部卡片广告',
          activityIds:
            'com.gamersky.common.activity.LibDetailContentDetailActivity',
          matches: 'View[childCount=2] > [text="广告"] + View[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/import/13451258',
        },
        {
          key: 2,
          activityIds:
            'com.gamersky.common.activity.LibDetailContentDetailActivity',
          matches: 'View[childCount=2] > [text="广告"] + View[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/import/13635579',
        },
        {
          key: 3,
          name: '评论区卡片广告',
          activityIds:
            'com.gamersky.common.activity.LibDetailContentDetailActivity',
          quickFind: true,
          matches:
            '@[id="com.gamersky:id/close"][clickable=true][visibleToUser=true] - * > [id="com.gamersky:id/badge"]',
          snapshotUrls: 'https://i.gkd.li/import/13759484',
        },
      ],
    },
  ],
});
