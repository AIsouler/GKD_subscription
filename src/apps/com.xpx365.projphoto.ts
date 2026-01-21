import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.xpx365.projphoto',
  name: '工程相机',
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
          anyMatches: [
            '@View[text=null][clickable=true][childCount=0][visibleToUser=true][width<200&&height<200] +(1,2) TextView[index=parent.childCount.minus(1)][childCount=0] <n FrameLayout[childCount>2][text=null][desc=null] >(n+6) [text*="第三方应用" || text*="扭动手机" || text*="点击或上滑" || text*="省钱好物" || text*="扭一扭"][visibleToUser=true]',
            'FrameLayout > FrameLayout[childCount>2][text=null][desc=null] > @View[text=null][clickable=true][childCount=0][visibleToUser=true][width<200&&height<200] +(1,2) TextView[index=parent.childCount.minus(1)][childCount=0][visibleToUser=true]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/13827755',
        },
        {
          key: 1,
          fastQuery: true,
          matches:
            '[text*="跳过"][text.length<10][width<500 && height<300][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/16030619',
            'https://i.gkd.li/i/16030620',
            'https://i.gkd.li/i/16030622',
          ],
        },
        {
          key: 2,
          fastQuery: true,
          matches:
            '@ImageView[clickable=true][visibleToUser=true] - [text="|"]',
          snapshotUrls: 'https://i.gkd.li/i/16030413',
        },
      ],
    },
    {
      key: 6,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          name: '字节广告SDK',
          activityIds:
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          matches:
            '@LinearLayout[clickable=true] - FrameLayout[childCount=1] > [text="反馈"]',
          snapshotUrls: 'https://i.gkd.li/i/13762195',
        },
        {
          key: 1,
          name: '腾讯广告SDK',
          activityIds: 'com.xpx365.projphoto.FirstActivity',
          matches:
            '@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null] - FrameLayout[childCount>2] >3 [text^="立即" || text$="应用" || text="了解更多" || text="查看详情"]',
          snapshotUrls: 'https://i.gkd.li/i/13762196',
        },
        {
          key: 2,
          name: '快手广告SDK',
          activityIds: 'com.xpx365.projphoto.AdKS2AutoCloseActivity',
          matches:
            '[id="com.kwad.dy.sdk:id/ksad_tk_view"] @ViewGroup[clickable=true] > TextView[text="跳过"]',
          snapshotUrls: 'https://i.gkd.li/i/13695668',
        },
      ],
    },
  ],
});
