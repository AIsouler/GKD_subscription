import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.jd.pingou',
  name: '京喜',
  groups: [
    {
      key: 1,
      name: '权限提示-定位权限',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.jd.jdlite.MainFrameActivity',
          matches:
            '@ImageView[clickable=true][visibleToUser=true] -2 [text^="开启定位授权"]',
          exampleUrls: 'https://e.gkd.li/311e64ee-e775-41fb-b981-ceead0280ac7',
          snapshotUrls: 'https://i.gkd.li/i/13804515',
        },
      ],
    },
  ],
});
