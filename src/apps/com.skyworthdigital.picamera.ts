import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.skyworthdigital.picamera',
  name: '创维智慧云',
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
          matches: '[text*="跳过"][text.length<=10]',
          exampleUrls:
            'https://m.gkd.li/57941037/07c9f980-aa0f-4044-a58d-299a2a358857',
          snapshotUrls: 'https://i.gkd.li/i/13497656',
        },
        {
          key: 1,
          anyMatches: [
            '@View[clickable=true][text=null][visibleToUser=true] + TextView[index=parent.childCount.minus(1)][text=null] <n FrameLayout[childCount>2] >(7,8,9,10) [text*="第三方应用" || text*="扭动手机" || text*="点击或上滑"][visibleToUser=true]',
            'FrameLayout > FrameLayout[childCount>2] > @View[clickable=true][text=null][visibleToUser=true] + TextView[index=parent.childCount.minus(1)][text=null][visibleToUser=true]',
          ],
          exampleUrls:
            'https://m.gkd.li/57941037/3b5cba55-7024-4d3e-a21c-7b1d540515bc',
          snapshotUrls: 'https://i.gkd.li/i/14511463',
        },
      ],
    },
  ],
});
