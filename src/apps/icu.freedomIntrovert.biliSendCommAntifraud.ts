import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'icu.freedomIntrovert.biliSendCommAntifraud',
  name: '哔哩发评反诈',
  groups: [
    {
      key: 1,
      name: '局部广告-检查评论自动后台等待',
      rules: [
        {
          fastQuery: true,
          activityIds:
            'icu.freedomIntrovert.biliSendCommAntifraud.ByXposedLaunchedActivity',
          matches: 'Button[text="后台等待"]',
          snapshotUrls: 'https://i.gkd.li/i/25240613',
        },
      ],
    },
  ],
});
