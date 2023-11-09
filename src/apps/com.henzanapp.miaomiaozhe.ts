import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.henzanapp.miaomiaozhe',
  name: '喵喵折',
  groups: [
    {
      key: 1,
      name: '更新弹窗',
      activityIds: 'com.henzanapp.miaomiaozhe.activity.WelcomeActivity',
      rules: '[text="更新提示"] +(2) LinearLayout > [text="取消"]',
      snapshotUrls: ['https://i.gkd.li/import/import/12649457'],
    },
  ],
});
