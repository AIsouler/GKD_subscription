import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.jxedt',
  name: '驾校一点通',
  groups: [
    {
      key: 1,
      name: '首页广告',
      activityIds: ['com.jxedt.ui.activitys.GuideActivity'],
      rules: [
        {
          matches: '[id="com.jxedt:id/tv_guide_tiaoguo" || text*="跳过"]',
          snapshotUrls: [
            'https://i.gkd.li/import/12605051',
            'https://i.gkd.li/import/12605053',
            'https://i.gkd.li/import/12605057',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '广告卡片',
      activityIds: 'com.jxedt.ui.activitys.exercise.OrderExerciseActivity',
      rules: '[id="com.jxedt:id/img_question_banner_close"]',
      snapshotUrls: 'https://i.gkd.li/import/13195641',
    },
  ],
});
