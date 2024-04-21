import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.mxbc.ohsa',
  name: '蜜雪冰城鸿蒙版',
  groups: [
    {
      key: 3,
      name: '全屏广告-首页弹窗广告',
      rules: [
        {
          activityIds: 'com.mxbc.ohsa.modules.main.MainAbilityShellActivity',
          matches: 'UIComponentContainer > [id="Id_close"]',
          snapshotUrls: 'https://i.gkd.li/i/13728113',
        },
      ],
    },
  ],
});
