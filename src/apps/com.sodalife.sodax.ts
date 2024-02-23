import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.sodalife.sodax',
  name: '苏打校园',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      rules: [
        {
          key: 1,
          name: '字节广告',
          activityIds:
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          matches: '@Image < View +3 View > View > TextView[text$="广告"]',
          snapshotUrls: 'https://i.gkd.li/i/13400643',
        },
        {
          key: 10,
          name: '双十一广告',
          activityIds:
            'com.sodalife.sodax.libraries.ads.gromore.GroMoreSplashActivity',
          matches:
            'ViewGroup[childCount=2] > ViewGroup + ViewGroup[clickable=true][childCount=1]',
          snapshotUrls: 'https://i.gkd.li/i/13400653',
        },
      ],
    },
  ],
});
