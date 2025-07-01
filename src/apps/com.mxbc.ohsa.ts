import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.mxbc.ohsa',
  name: '蜜雪冰城鸿蒙版',
  groups: [
    {
      key: 3,
      name: '全屏广告-首页弹窗广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.mxbc.ohsa.modules.main.MainAbilityShellActivity',
          matches:
            '@UIComponent[id="Id_close"] <2 UIComponentContainer < UIComponentContainer < UIComponentContainer < [id="android:id/content"]',
          snapshotUrls: 'https://i.gkd.li/i/13728113',
        },
      ],
    },
  ],
});
