import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.bluemobile.flutterbabylife',
  name: '宝宝生活记录',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      matchTime: 10000,
      actionMaximum: 1,
      rules: [
        {
          key: 0,
          name: '字节SDK',
          activityIds:
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          matches: 'View[childCount=7] > View[index=1]',
          snapshotUrls: 'https://i.gkd.li/import/13632639',
        },
      ],
    },
  ],
});
