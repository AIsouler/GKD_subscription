import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.xpx365.projphoto',
  name: '工程相机',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      actionCdKey: 0,
      actionMaximumKey: 0,
      rules: [
        {
          key: 0,
          matches:
            '@View <2 FrameLayout <2 FrameLayout < [vid="splash_container"]',
          snapshotUrls: 'https://i.gkd.li/import/13827755',
        },
      ],
    },
    {
      key: 6,
      name: '广告弹窗',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          name: '字节广告SDK',
          activityIds:
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          matches:
            '@LinearLayout[clickable=true] > LinearLayout[clickable=true]',
          snapshotUrls: [
            'https://i.gkd.li/import/13695604',
            'https://i.gkd.li/import/13762212',
            'https://i.gkd.li/import/13762195',
          ],
        },
        {
          name: '腾讯广告SDK',
          activityIds: 'com.xpx365.projphoto.FirstActivity',
          matches: 'FrameLayout[childCount>1] > FrameLayout[index=3]',
          snapshotUrls: 'https://i.gkd.li/import/13762196',
        },
        {
          name: '快手广告SDK',
          activityIds: 'com.xpx365.projphoto.AdKS2AutoCloseActivity',
          matches:
            '[id="com.kwad.dy.sdk:id/ksad_tk_view"] @ViewGroup[clickable=true] > TextView[text="跳过"]',
          snapshotUrls: 'https://i.gkd.li/import/13695668',
        },
      ],
    },
  ],
});
