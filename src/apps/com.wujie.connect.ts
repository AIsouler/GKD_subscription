import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.wujie.connect',
  name: '无界趣连',
  groups: [
    {
      key: 1,
      name: '更新提示',
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[vid="no_update_tv"]',
      snapshotUrls: 'https://i.gkd.li/i/14296122',
    },
  ],
});
