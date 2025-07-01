import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'npgl.jsitcx.xlpqi',
  name: 'NP管理器',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      rules: [
        {
          key: 0,
          activityIds:
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          matches: '[text$="跳过"]',
          snapshotUrls: 'https://i.gkd.li/i/12799926',
        },
        {
          key: 1,
          activityIds:
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          matches:
            '@Image[id=null][text=""] < View + View +n [text="反馈"] +n View > View > TextView[text="广告"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12799942',
            'https://i.gkd.li/i/12800095',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '分段广告-卡片广告',
      activityIds: [
        'flc.ast.HomeActivity',
        'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
      ],
      rules: [
        {
          key: 0,
          matches:
            '@Image[childCount=0][visibleToUser=true][width<80 && height<80] < View[childCount=1] +n View[childCount=2] >(2,3) [text="广告"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12799977',
            'https://i.gkd.li/i/12800107',
          ],
        },
        {
          key: 1,
          matches:
            '@Image[childCount=0][visibleToUser=true][width<80 && height<80] < View[childCount=1] -3 View >2 [text="广告"]',
          snapshotUrls: 'https://i.gkd.li/i/12800034',
          excludeSnapshotUrls: 'https://i.gkd.li/i/12800162', // 限定 Image[visibleToUser=true]，防止点击不可见节点
        },
        {
          preKeys: [0, 1],
          key: 2,
          matches: '@LinearLayout > [text="不感兴趣"]',
          snapshotUrls: 'https://i.gkd.li/i/12799995',
        },
      ],
    },
  ],
});
