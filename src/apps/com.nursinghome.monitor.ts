import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.nursinghome.monitor',
  name: '看护家',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      rules: [
        {
          key: 1,
          fastQuery: true,
          matchTime: 10000,
          actionMaximum: 1,
          resetMatch: 'app',
          activityIds: '.ui.activity.MainActivity',
          matches:
            'ImageView[childCount=0][text=null] < @ViewGroup[clickable=true][childCount=1] < ViewGroup <6 ViewGroup + ViewGroup >3 [text="广告"]',
          exampleUrls: 'https://e.gkd.li/12316698-b92f-4a78-be55-5d9a90700f4a',
          snapshotUrls: 'https://i.gkd.li/i/17504953',
        },
      ],
    },
  ],
});
