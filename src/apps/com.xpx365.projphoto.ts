import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.xpx365.projphoto',
  name: '工程相机',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          matches:
            'FrameLayout > FrameLayout[childCount>2] > @View[clickable=true] + TextView <<n [id="android:id/content"]',
          snapshotUrls: 'https://i.gkd.li/i/13827755',
        },
      ],
    },
    {
      key: 6,
      name: '全屏广告-弹窗广告',
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
            'https://i.gkd.li/i/13695604',
            'https://i.gkd.li/i/13762212',
            'https://i.gkd.li/i/13762195',
          ],
        },
        {
          name: '腾讯广告SDK',
          activityIds: 'com.xpx365.projphoto.FirstActivity',
          matches: 'FrameLayout[childCount>1] > FrameLayout[index=3]',
          snapshotUrls: 'https://i.gkd.li/i/13762196',
        },
        {
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
