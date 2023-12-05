import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.hoperun.intelligenceportal',
  name: '我的南京',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[text="跳过"]',
      snapshotUrls: 'https://i.gkd.li/import/13546417',
    },
  ],
});
