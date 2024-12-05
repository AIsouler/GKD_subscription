import { defineGkdApp } from '@gkd-kit/define';
export default defineGkdApp({
  id: 'com.x2era.xcloud.app',
  name: 'Fa米家',
  groups: [
    {
      key: 1,
      name: '更新提示',
      desc: '关闭升级弹窗',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.MainActivity',
          matches: [
            '[id="com.x2era.xcloud.app:id/tv_upgrade"]',
            '[id="com.x2era.xcloud.app:id/iv_cancel"]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/13420706',
        },
      ],
    },
  ],
});
