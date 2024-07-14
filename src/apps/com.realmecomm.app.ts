import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.realmecomm.app',
  name: 'realme社区',
  groups: [
    {
      key: 1,
      name: '功能类-自动签到',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.android.realme2.home.view.MainActivity',
          matches: '[text="签到"][clickable=true][visibleToUser=true]',
          exampleUrls:
            'https://m.gkd.li/57941037/18a5751c-0bbd-475d-be6a-5803307111cb',
          snapshotUrls: 'https://i.gkd.li/i/14321155',
        },
      ],
    },
  ],
});
