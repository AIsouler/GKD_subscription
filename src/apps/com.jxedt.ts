import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.jxedt',
  name: '驾校一点通',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[text^="跳过"][text.length<=10]',
      snapshotUrls: [
        'https://i.gkd.li/import/12605051',
        'https://i.gkd.li/import/12605053',
        'https://i.gkd.li/import/12605057',
      ],
    },
    {
      key: 2,
      name: '广告卡片',
      activityIds: 'com.jxedt.ui.activitys.exercise.OrderExerciseActivity',
      rules: '[id="com.jxedt:id/img_question_banner_close"]',
      snapshotUrls: 'https://i.gkd.li/import/13195641',
    },
    {
      key: 3,
      name: '弹窗广告',
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
