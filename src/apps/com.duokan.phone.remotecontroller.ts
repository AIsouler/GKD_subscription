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
    {
      key: 5,
      name: '局部广告',
      rules: [
        {
          fastQuery: true,
          activityIds:
            'com.xiaomi.mitv.phone.remotecontroller.HoriWidgetMainActivityV2',
          matches: '[vid="image_close_banner"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/bf36812a-1bf9-43dc-aca5-f351c2f8d1f6',
          snapshotUrls: 'https://i.gkd.li/i/22451785',
        },
      ],
    },
  ],
});
