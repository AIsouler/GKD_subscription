import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.guwendao.gwd',
  name: '古文岛',
  groups: [
    {
      key: 1,
      name: '更新提示',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[text="应用升级提醒"] +n LinearLayout > [text="取消"]',
      snapshotUrls: 'https://i.gkd.li/import/12776605',
    },
    {
      key: 2,
      name: '全屏广告-弹窗广告',
      activityIds: 'com.guwendao.gwd.MainActivity',
      rules: [
        // 腾讯广告
        {
          key: 0,
          matches: 'ImageView - FrameLayout > FrameLayout > ImageView[id=null]',
          snapshotUrls: 'https://i.gkd.li/import/12776607',
        },
        {
          activityIds:
            'com.android.systemui.media.MediaProjectionPermissionActivity', // 疑似设置权限后activityId更新不及时产生的bug
          key: 1,
          matches:
            'ImageView - LinearLayout - FrameLayout > FrameLayout > ImageView[id=null]',
          snapshotUrls: 'https://i.gkd.li/import/12777151',
        },
        {
          key: 2,
          matches:
            '[id="com.byted.pangle.m:id/tt_reward_full_count_down_after"]',
          snapshotUrls: 'https://i.gkd.li/import/12781344',
        },
        {
          key: 3,
          matches:
            'ImageView < FrameLayout + FrameLayout > FrameLayout > ImageView[id=null]',
          snapshotUrls: 'https://i.gkd.li/import/12924728',
        },

        // 字节广告
        {
          activityIds:
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          key: 10,
          matches: '@Image[id=null] < View + View + TextView[text="反馈"]',
          snapshotUrls: 'https://i.gkd.li/import/12781327',
        },
      ],
    },
  ],
});
