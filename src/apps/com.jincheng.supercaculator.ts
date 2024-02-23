import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.jincheng.supercaculator',
  name: '全能计算器',
  groups: [
    {
      key: 0,
      name: '全屏广告-弹窗广告',
      desc: '点击右上角x',
      rules: [
        {
          key: 0,
          name: '字节广告',
          activityIds: [
            'com.jincheng.supercaculator.activity.MainActivity',
            'com.jincheng.supercaculator.activity.basic.CalculatorActivity',
          ],
          matches: '@Image < View < View TextView[text = "反馈"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12859523',
            'https://i.gkd.li/i/12859545',
            'https://i.gkd.li/i/13670598',
          ],
        },
        {
          key: 1,
          name: '腾讯广告-1',
          activityIds: 'com.jincheng.supercaculator.activity.SplashActivity',
          matches:
            'TextView < LinearLayout[childCount=2] < FrameLayout[childCount=2] > FrameLayout[childCount=1] > ImageView',
          snapshotUrls: 'https://i.gkd.li/i/13261870',
        },
        {
          key: 2,
          name: '腾讯广告-2',
          activityIds:
            'com.jincheng.supercaculator.activity.basic.CalculatorActivity',
          matches:
            'ImageView -2 FrameLayout > FrameLayout > FrameLayout[childCount=1] > ImageView[childCount=0]',
          snapshotUrls: 'https://i.gkd.li/i/13378847',
        },
      ],
    },
  ],
});
