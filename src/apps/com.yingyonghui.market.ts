import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.yingyonghui.market',
  name: '应用汇',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      rules: [
        {
          key: 0,
          name: '快手广告',
          activityIds: 'com.yingyonghui.market.ui.MainActivity',
          matches: [
            'ViewGroup[childCount=2] > ImageView + [text="广告"]',
            'ViewGroup[childCount=3] > TextView + TextView + ImageView',
          ],
          snapshotUrls: 'https://i.gkd.li/i/13538316',
        },
      ],
    },
  ],
});
