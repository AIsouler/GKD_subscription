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
      priorityTime: 10000,
      rules: [
        {
          key: 0,
          fastQuery: true,
          matches: '[text*="跳过"][text.length<10][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/a2e4b32b-dfee-4626-9612-6df0cb530f9e',
          snapshotUrls: [
            'https://i.gkd.li/i/20882921',
            'https://i.gkd.li/i/20882935',
          ],
        },
        {
          // 跳过按钮在左下角时有概率误触，原因未知，误触后返回可跳过广告
          preKeys: [0],
          fastQuery: true,
          action: 'back',
          matches: '[text="反馈" || text^="立即"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/659e3f23-4765-41bf-bb4e-e4c20575ca0a',
          snapshotUrls: [
            'https://i.gkd.li/i/20883058',
            'https://i.gkd.li/i/20883138',
          ],
        },
        {
          key: 1, // 字节SDK
          anyMatches: [
            '@View[text=null][clickable=true][childCount=0][visibleToUser=true][width<200&&height<200] +(1,2) TextView[index=parent.childCount.minus(1)][childCount=0] <n FrameLayout[childCount>2] >(7,8,9,10) [text*="第三方应用" || text*="扭动手机" || text*="点击或上滑" || text*="省钱好物"][visibleToUser=true]',
            'FrameLayout > FrameLayout[childCount>2] > @View[text=null][clickable=true][childCount=0][visibleToUser=true][width<200&&height<200] +(1,2) TextView[index=parent.childCount.minus(1)][childCount=0][visibleToUser=true]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/20883248',
        },
      ],
    },
  ],
});
