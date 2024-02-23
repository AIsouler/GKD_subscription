import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.henzanapp.miaomiaozhe',
  name: '喵喵折',
  groups: [
    {
      key: 1,
      name: '更新提示',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[text="更新提示"] +(2) LinearLayout > [text="取消"]',
      snapshotUrls: ['https://i.gkd.li/i/12649457'],
    },
  ],
});
