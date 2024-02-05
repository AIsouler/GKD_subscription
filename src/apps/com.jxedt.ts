import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.jxedt',
  name: '驾校一点通',
  groups: [
    {
      key: 2,
      name: '局部广告-广告卡片',
      activityIds: 'com.jxedt.ui.activitys.exercise.OrderExerciseActivity',
      rules: '[id="com.jxedt:id/img_question_banner_close"]',
      snapshotUrls: 'https://i.gkd.li/import/13195641',
    },
    {
      key: 3,
      name: '全屏广告-弹窗广告',
      rules: [
        {
          key: 0,
          activityIds: 'com.jxedt.ui.activitys.NewHomeActivity',
          quickFind: true,
          matches: '[id="com.jxedt:id/img_dialog_ad_close"]',
          snapshotUrls: 'https://i.gkd.li/import/13476741',
        },
      ],
    },
  ],
});
