import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.yaxisvip.pubgtool.iueg',
  name: '次元城动画',
  groups: [
    {
      key: 1,
      name: '通知提示-公告',
      rules: [
        {
          activityIds: 'top.cycdm.cycapp.MainActivity',
          matches:
            '[text="我知道了"] < @[clickable=true] -n * > [text="重要通知"]',
          snapshotUrls: 'https://i.gkd.li/i/24331012',
        },
      ],
    },
    {
      key: 2,
      name: '全屏广告',
      rules: [
        {
          activityIds:
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          matches:
            '@Image[childCount=0][text=""] < View[childCount=1] < View[childCount=1] - View[childCount=1] > [text="反馈"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/24331009',
        },
      ],
    },
  ],
});
