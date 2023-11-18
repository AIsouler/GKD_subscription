import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.sohu.inputmethod.sogou',
  name: '搜狗输入法',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '@LinearLayout > [text="跳过"]',
      snapshotUrls: 'https://i.gkd.li/import/13379281',
    },
  ],
});
