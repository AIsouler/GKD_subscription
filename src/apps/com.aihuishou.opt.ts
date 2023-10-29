import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.aihuishou.opt',
  name: '拍机堂',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[id="com.aihuishou.opt:id/count_down_tv"]',
      snapshotUrls: ['https://i.gkd.li/import/13197573'],
    },
  ],
});
