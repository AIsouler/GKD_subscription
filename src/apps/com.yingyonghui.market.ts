import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.yingyonghui.market',
  name: '应用汇',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          matches: '[id = "com.yingyonghui.market:id/splashAdvert_skipText"]',
          snapshotUrls: 'https://i.gkd.li/import/13196213',
        },
        {
          key: 1,
          matches: '@ImageView[clickable=true] + * > [text="跳过"]',
          snapshotUrls: 'https://i.gkd.li/import/13538315',
        },
      ],
    },
    {
      key: 1,
      name: '弹窗广告',
      rules: [
        {
          key: 0,
          name: '快手广告',
          activityIds: 'com.yingyonghui.market.ui.MainActivity',
          matches: [
            'ViewGroup[childCount=2] > ImageView + [text="广告"]',
            'ViewGroup[childCount=3] > TextView + TextView + ImageView',
          ],
          snapshotUrls: 'https://i.gkd.li/import/13538316',
        },
      ],
    },
  ],
});
