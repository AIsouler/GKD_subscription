import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.android.incallui',
  name: '电话',
  groups: [
    {
      key: 1,
      name: '功能类-接通话时自动点击录音',
      actionMaximum: 1,
      rules: [
        {
          actionDelay: 500,
          fastQuery: true,
          activityIds: '.InCallActivity',
          matches: [
            '[vid="elapsedTime"][visibleToUser=true]',
            '[vid="recordButton"][desc="录音"][visibleToUser=true]',
          ],
          exampleUrls: 'https://e.gkd.li/cfe191ef-3786-403c-ba88-e18d299803a8',
          snapshotUrls: 'https://i.gkd.li/i/20876897',
          excludeSnapshotUrls: [
            'https://i.gkd.li/i/20876893', // 接通后
            'https://i.gkd.li/i/20877514', // 未接通时点击无效
          ],
        },
      ],
    },
  ],
});
