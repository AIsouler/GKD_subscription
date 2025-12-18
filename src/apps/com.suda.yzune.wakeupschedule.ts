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
  ],
});
