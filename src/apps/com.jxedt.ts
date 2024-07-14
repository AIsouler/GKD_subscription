import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.jxedt',
  name: '驾校一点通',
  groups: [
    {
      key: 2,
      name: '局部广告-卡片广告',
      activityIds: 'com.jxedt.ui.activitys.exercise.OrderExerciseActivity',
      rules: '[id="com.jxedt:id/img_question_banner_close"]',
      snapshotUrls: 'https://i.gkd.li/i/13195641',
    },
    {
      key: 3,
      name: '全屏广告-弹窗广告',
      rules: [
        {
          key: 0,
          activityIds: 'com.jxedt.ui.activitys.NewHomeActivity',
          fastQuery: true,
          matches: '[id="com.jxedt:id/img_dialog_ad_close"]',
          snapshotUrls: 'https://i.gkd.li/i/13476741',
        },
      ],
    },
  ],
});
