import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'npgl.jsitcx.xlpqi',
  name: 'NP管理器',
  groups: [
    {
      key: 1,
      name: '全屏广告-广告弹窗',
      rules: [
        {
          key: 0,
          activityIds:
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          matches: '[text$="跳过"]',
          snapshotUrls: 'https://i.gkd.li/import/12799926',
        },
        {
          key: 1,
          activityIds:
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          matches:
            '@Image[id=null][text=""] < View + View +n [text="反馈"] +n View > View > TextView[text="广告"]',
          snapshotUrls: [
            'https://i.gkd.li/import/12799942',
            'https://i.gkd.li/import/12800095',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '分段广告-广告卡片',
      activityIds: [
        'flc.ast.HomeActivity',
        'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
      ],
      rules: [
        {
          key: 0,
          matches: '@Image < View + View >2 Image',
          snapshotUrls: [
            'https://i.gkd.li/import/12799977',
            'https://i.gkd.li/import/12800107',
          ],
        },
        {
          key: 1,
          matches: 'Image < View < View +n View > Image[visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/import/12800034',
            'https://i.gkd.li/import/12800162', // 限定 Image[visibleToUser=true]，防止点击不可见节点
          ],
        },
        {
          preKeys: [0, 1],
          key: 2,
          matches: '@LinearLayout > [text="不感兴趣"]',
          snapshotUrls: 'https://i.gkd.li/import/12799995',
        },
      ],
    },
  ],
});
