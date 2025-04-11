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
          anyMatches: [
            '@View[text=null][clickable=true][childCount=0][visibleToUser=true][width<200&&height<200] +(1,2) TextView[index=parent.childCount.minus(1)][text=null] <n FrameLayout[childCount>2] >(7,8,9,10) [text*="第三方应用" || text*="扭动手机" || text*="点击或上滑"][visibleToUser=true]',
            'FrameLayout > FrameLayout[childCount>2] > @View[text=null][clickable=true][childCount=0][visibleToUser=true][width<200&&height<200] +(1,2) TextView[index=parent.childCount.minus(1)][text=null][visibleToUser=true]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/13840775',
            'https://i.gkd.li/i/13944086',
          ],
        },
      ],
    },
  ],
});
