import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.huaban.android',
  name: '花瓣',
  groups: [
    {
      key: 1,
      name: '更新提示-版本更新弹窗',
      desc: '点击不再提示',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      quickFind: true,
      rules: [
        {
          matches: '[vid="tv_update"] + * > [text="不再提示"]',
          snapshotUrls: 'https://i.gkd.li/import/13832253',
        },
      ],
    },
  ],
});
