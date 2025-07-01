import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.duokan.phone.remotecontroller',
  name: '万能遥控',
  groups: [
    {
      key: 4,
      name: '权限提示-定位权限',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds:
            'com.xiaomi.mitv.phone.remotecontroller.HoriWidgetMainActivityV2',
          matches:
            '[id="com.duokan.phone.remotecontroller:id/ll_permission"] >2 [text="取消"]',
          snapshotUrls: 'https://i.gkd.li/i/13642080',
        },
      ],
    },
  ],
});
