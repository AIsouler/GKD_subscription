import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'youqu.android.todesk',
  name: 'ToDesk',
  groups: [
    {
      key: 1,
      name: '局部广告-广告卡片',
      desc: '关闭广告卡片',
      quickFind: true,
      activityIds: [
        'youqu.android.todesk.activity.WelcomeActivity',
        'youqu.android.todesk.activity.MainActivity', //新增activityIds
      ],
      rules: [
        {
          key: 0,
          matches:
            '[id="youqu.android.todesk:id/ivAdClose" || id="youqu.android.todesk:id/llClose"]',
          exampleUrls:
            'https://m.gkd.li/57941037/7535a849-b4a7-4dd5-a6c1-4d3def042d70',
          snapshotUrls: [
            'https://i.gkd.li/i/14175556', // id="youqu.android.todesk:id/ivAdClose"
            'https://i.gkd.li/i/13228546', // id="youqu.android.todesk:id/llClose"
          ],
        },
      ],
    },
  ],
});
