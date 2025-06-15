import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.voyah.fassistant',
  name: '岚图汽车',
  groups: [
    {
      key: 1,
      name: '功能类-自动签到',
      rules: [
        {
          fastQuery: true,
          activityIds: '.MainActivity',
          matches: '[text="签到"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/80aa2e89-de9e-45aa-b2cb-5194eaac849a',
          snapshotUrls: 'https://i.gkd.li/i/20742927',
          excludeSnapshotUrls: 'https://i.gkd.li/i/20727658',
        },
      ],
    },
  ],
});
