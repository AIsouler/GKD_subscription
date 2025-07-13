import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.weilaishanhai.oopz',
  name: 'Oopz',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          fastQuery: true,
          matches:
            '[name!$="RelativeLayout"] > [text*="跳过"][index=0][text.length<10][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/fbb3e3c2-74d7-4b1b-8daa-48bab63189a4',
          snapshotUrls: [
            'https://i.gkd.li/i/21202366',
            'https://i.gkd.li/i/21202363',
            'https://i.gkd.li/i/21202366',
          ],
          excludeSnapshotUrls: 'https://i.gkd.li/i/21202513', // 虚假跳过按钮 https://github.com/AIsouler/GKD_subscription/issues/1043
        },
      ],
    },
    {
      key: 2,
      name: '分段广告',
      desc: '有的广告即使点击跳过后仍然会强制进入，此规则用于处理这种情况',
      activityIds: 'com.wangmai.appsdkdex.WMPortraitActivity',
      exampleUrls: 'https://e.gkd.li/c1299341-66bf-4702-885c-3fbe5d648675',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches: '[id="com.wangmai.allmodules:id/wm_image_clear"]',
          snapshotUrls: 'https://i.gkd.li/i/21202940',
        },
      ],
    },
  ],
});
