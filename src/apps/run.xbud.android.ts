import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'run.xbud.android',
  name: '小步点',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      rules: [
        {
          key: 0,
          name: '快手广告',
          activityIds: 'run.xbud.android.mvp.ui.other.MainActivity',
          matches:
            '[id="run.xbud.android:id/ksad_tk_view"] >n @ViewGroup[clickable=true] > ImageView',
          snapshotUrls: [
            'https://i.gkd.li/import/12777133',
            'https://i.gkd.li/import/12777134',
          ],
        },
        {
          key: 1,
          name: '腾讯广告1',
          activityIds: 'run.xbud.android.mvp.ui.other.MainActivity',
          matches:
            'ImageView - LinearLayout < FrameLayout - FrameLayout > FrameLayout > ImageView',
          snapshotUrls: 'https://i.gkd.li/import/13296371',
        },
        {
          key: 2,
          name: '腾讯广告2',
          activityIds: 'run.xbud.android.mvp.ui.other.MainActivity',
          matches:
            'ImageView -n FrameLayout > FrameLayout > FrameLayout > ImageView',
          snapshotUrls: 'https://i.gkd.li/import/13296398',
        },
        {
          key: 3,
          name: '字节广告-1',
          activityIds:
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          matches:
            '@Image[text=""] < View +n View > View > TextView[text="广告"]',
          snapshotUrls: 'https://i.gkd.li/import/13414538',
        },
        {
          key: 4,
          name: '字节广告-2',
          activityIds:
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          matches: '[id="com.byted.pangle:id/tt_reward_full_count_down_after"]',
          snapshotUrls: 'https://i.gkd.li/import/13414544',
        },
      ],
    },
  ],
});
