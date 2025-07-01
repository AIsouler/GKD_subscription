import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.yujian.ResideMenuDemo',
  name: '雨见',
  groups: [
    {
      key: 1,
      name: '更新提示',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'cn.yujian.MainActivity',
          matches:
            'TextView[id="com.yujian.ResideMenuDemo:id/btn_selectOther"]',
          snapshotUrls: 'https://i.gkd.li/i/13224234',
        },
      ],
    },
  ],
});
