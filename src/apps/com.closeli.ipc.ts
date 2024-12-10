import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.closeli.ipc',
  name: 'Eyeplus',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.arcsoft.closeli.dhmain2.main.NewMainActivity',
          matches: '@[vid="iv_close"] - [vid="iv_ads"]',
          exampleUrls: 'https://e.gkd.li/2f4b9b69-06bb-4d7e-9607-4e1ebb57322b',
          snapshotUrls: 'https://i.gkd.li/i/18070447',
        },
      ],
    },
    {
      key: 2,
      name: '局部广告-卡片广告',
      desc: '点击关闭',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.arcsoft.closeli.dhmain2.main.NewMainActivity',
          matches:
            'FrameLayout[childCount=2] > FrameLayout[childCount=3] > FrameLayout[index=2][childCount=1] > @ImageView[childCount=0][visibleToUser=true] <<n [vid="cv_empty_container"]',
          exampleUrls: 'https://e.gkd.li/798ebfdd-7966-437c-9d29-ce34749113d8',
          snapshotUrls: 'https://i.gkd.li/i/18070476',
        },
      ],
    },
  ],
});
