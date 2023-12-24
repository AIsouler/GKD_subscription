import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.xpx365.projphoto',
  name: '工程相机',
  groups: [
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
            'LinearLayout[clickable=true] > LinearLayout[clickable=true] > ImageView[width<90][height<90]',
          snapshotUrls: 'https://i.gkd.li/import/13695604',
        },
        {
          name: '腾讯广告SDK',
          activityIds: 'com.xpx365.projphoto.FirstActivity',
          matches:
            'FrameLayout[childCount>1] > FrameLayout[childCount=1] > ImageView[width<90][height<90]',
          snapshotUrls: 'https://i.gkd.li/import/13695519',
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
