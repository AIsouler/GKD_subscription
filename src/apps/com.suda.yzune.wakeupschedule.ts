import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.suda.yzune.wakeupschedule',
  name: 'WakeUp课程表',
  groups: [
    {
      key: 1,
      name: '评价提示',
      rules: [
        {
          fastQuery: true,
          activityIds:
            'com.suda.yzune.wakeupschedule.schedule.ScheduleActivity',
          matches: '@[vid="ib_close"][clickable=true] +n [text$="五星好评"]',
          snapshotUrls: 'https://i.gkd.li/i/24230090',
        },
      ],
    },
    {
      key: 2,
      name: '更新提示',
      rules: [
        {
          fastQuery: true,
          activityIds:
            'com.suda.yzune.wakeupschedule.schedule.ScheduleActivity',
          matches: ['[text^="新版"]', '[vid="update_close"][clickable=true]'],
          snapshotUrls: 'https://i.gkd.li/i/24336743',
        },
      ],
    },
  ],
});
