import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.jincheng.supercaculator',
  name: '全能计算器',
  groups: [
    {
      key: 0,
      name: '弹窗广告',
      desc: '点击右上角x',
      activityIds: 'com.jincheng.supercaculator.activity.MainActivity',
      rules: '@Image < View < View TextView[text = "反馈"]',
      snapshotUrls: [
        'https://gkd-kit.songe.li/import/12859523',
        'https://gkd-kit.songe.li/import/12859545',
      ],
    },
  ],
});
