import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.sfacg',
  name: '菠萝包轻小说',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      actionMaximum: 1,
      matchTime: 15000,
      rules: [
        {
          matches: '[id="com.sfacg:id/tv_jump"]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/13185579',
        },
      ],
    },
  ],
});
