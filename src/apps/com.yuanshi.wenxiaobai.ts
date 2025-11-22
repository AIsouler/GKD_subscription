import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.yuanshi.wenxiaobai',
  name: '问小白',
  groups: [
    {
      key: 1,
      name: '全屏广告',
      desc: '点击关闭',
      rules: [
        {
          activityIds:
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          matches:
            '@Image[childCount=0][width<80 && height<80] < View[childCount=1] < View[childCount=1] < View[childCount=1] < View[childCount=1] + View[childCount=1] >2 [text="广告"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/6efff57b-4697-4a4a-97da-de7e8b8dd7f2',
          snapshotUrls: 'https://i.gkd.li/i/23687188',
        },
      ],
    },
  ],
});
