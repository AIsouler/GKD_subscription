import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.rarlab.rar',
  name: 'RAR',
  groups: [
    {
      enable: false,
      key: 10,
      name: '订购 RAR 弹窗',
      desc: '自动点击【放弃】',
      activityIds: 'com.rarlab.rar.MainActivity',
      rules: '[text="订购"] + [text="放弃"]',
      snapshotUrls: 'https://gkd-kit.songe.li/import/12781596',
    },
  ],
});
