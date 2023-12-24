import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.mxbc.ohsa',
  name: '蜜雪冰城鸿蒙版',
  groups: [
    {
      key: 3,
      name: '首页-弹窗广告',
      rules: [
        {
          activityIds: 'com.mxbc.ohsa.modules.main.MainAbilityShellActivity',
          matches: 'UIComponentContainer > [id="Id_close"]',
          snapshotUrls: 'https://i.gkd.li/import/13728113',
        },
      ],
    },
  ],
});
