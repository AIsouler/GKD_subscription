import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.jincheng.supercaculator',
  name: '全能计算器',
  groups: [
    {
      key: 0,
      name: '弹窗广告',
      desc: '点击右上角x',
      rules: [
        {
          activityIds: 'com.jincheng.supercaculator.activity.MainActivity',
          matches: '@Image < View < View TextView[text = "反馈"]',
          snapshotUrls: [
            'https://i.gkd.li/import/12859523',
            'https://i.gkd.li/import/12859545',
          ],
        },
        {
          activityIds: 'com.jincheng.supercaculator.activity.SplashActivity',
          matches:
            'TextView < LinearLayout[childCount=2] < FrameLayout[childCount=2] > FrameLayout[childCount=1] > ImageView',
          snapshotUrls: ['https://i.gkd.li/import/import/13261870'],
        },
      ],
    },
  ],
});
