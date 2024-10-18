import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.delicloud.app.smartoffice',
  name: '得力e+',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      actionMaximumKey: 0,
      priorityTime: 10000,
      rules: [
        {
          key: 0,
          fastQuery: true,
          matches: '[text="跳过"][childCount=0][visibleToUser=true]',
          exampleUrls:
            'https://m.gkd.li/57941037/23262900-c52d-494a-9b7d-bb821025665a',
          snapshotUrls: 'https://i.gkd.li/i/14553055',
        },
        {
          key: 1,
          matches:
            'FrameLayout > FrameLayout[childCount>2] > @View[clickable=true][visibleToUser=true] + TextView[visibleToUser=true][text=null]',
          snapshotUrls: [
            'https://i.gkd.li/i/13840775',
            'https://i.gkd.li/i/13944086',
          ],
        },
      ],
    },
  ],
});
