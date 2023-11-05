import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.baidu.searchbox',
  name: '百度',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '@RelativeLayout > LinearLayout > [text="跳过"]',
      snapshotUrls: 'https://i.gkd.li/import/13258006',
    },
  ],
});
