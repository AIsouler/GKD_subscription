import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.wedobest.shudu',
  name: '数独',
  groups: [
    {
      key: 1,
      name: '局部广告',
      desc: 'x掉',
      rules: [
        {
          fastQuery: true,
          activityIds: '.GameAct',
          matches:
            '@Button[clickable=true] +2 [text="广告"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/24967577',
        },
      ],
    },
  ],
});
