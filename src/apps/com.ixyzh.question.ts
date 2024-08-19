import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.ixyzh.question',
  name: '小包搜题',
  groups: [
    {
      key: 1,
      name: '局部广告-卡片广告',
      desc: '点击关闭',
      fastQuery: true,
      rules: [
        {
          key: 0,
          activityIds: 'com.ixyzh.question.HomeActivity',
          matches:
            '@ImageView[clickable=true][desc^="close"] <<n [vid="ad_container"]',
          exampleUrls: 'https://e.gkd.li/eced433b-0fd5-4999-90de-45aab80c0b51',
          snapshotUrls: 'https://i.gkd.li/i/16661116',
        },
        {
          key: 1,
          activityIds: 'com.ixyzh.question.ui.fragments.my.MyDownloadActivity',
          matches:
            'FrameLayout[childCount=5] > FrameLayout[childCount=1] > @ImageView[childCount=0][visibleToUser=true][text=null] <<n [vid="ad_container"]',
          exampleUrls: 'https://e.gkd.li/ab77a0a8-14df-4d73-99e7-a1428965f2dd',
          snapshotUrls: 'https://i.gkd.li/i/16661119',
        },
        {
          key: 2,
          activityIds: 'com.ixyzh.question.ui.exercise.ExerciseActivity',
          matches:
            '@View[clickable=true] < FrameLayout[desc^="close"] + FrameLayout >2 [text="广告"]',
          exampleUrls: 'https://e.gkd.li/3dc83ae2-72f0-4660-b175-0610765fc6ec',
          snapshotUrls: 'https://i.gkd.li/i/16661120',
        },
      ],
    },
  ],
});
