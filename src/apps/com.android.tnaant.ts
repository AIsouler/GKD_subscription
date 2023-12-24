import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.android.tnaant',
  name: '蚂蚁加速器',
  groups: [
    {
      key: 5,
      name: '公告弹窗',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[text="公告"] +2 [text="我知道了"]',
      snapshotUrls: 'https://i.gkd.li/import/13713449',
    },
  ],
});
