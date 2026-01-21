import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.ydtx.camera',
  name: '元道经纬相机',
  groups: [
    {
      key: 1,
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
          matches:
            '[text*="跳过"][text.length<10][width<500 && height<300][visibleToUser=true][top<600]',
          exampleUrls: 'https://e.gkd.li/a2e4b32b-dfee-4626-9612-6df0cb530f9e',
          snapshotUrls: [
            'https://i.gkd.li/i/20882921',
            'https://i.gkd.li/i/20896758',
          ],
          excludeSnapshotUrls: 'https://i.gkd.li/i/20882935', // 左下角的跳过按钮是一个假按钮，点击会误触广告
        },
        {
          key: 1, // 字节SDK
          anyMatches: [
            '@View[text=null][clickable=true][childCount=0][visibleToUser=true][width<200&&height<200] +(1,2) TextView[index=parent.childCount.minus(1)][childCount=0] <n FrameLayout[childCount>2][text=null][desc=null] >(n+6) [text*="第三方应用" || text*="扭动手机" || text*="点击或上滑" || text*="省钱好物" || text*="扭一扭"][visibleToUser=true]',
            'FrameLayout > FrameLayout[childCount>2][text=null][desc=null] > @View[text=null][clickable=true][childCount=0][visibleToUser=true][width<200&&height<200] +(1,2) TextView[index=parent.childCount.minus(1)][childCount=0][visibleToUser=true]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/20883248',
        },
      ],
    },
  ],
});
