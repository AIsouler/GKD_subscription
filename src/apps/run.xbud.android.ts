import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
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
            'https://i.gkd.li/i/12777133',
            'https://i.gkd.li/i/12777134',
          ],
        },
        {
          key: 1,
          name: '腾讯广告',
          activityIds: 'run.xbud.android.mvp.ui.other.MainActivity',
          matches:
            '@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null] - FrameLayout[childCount>2] >3 [text^="立即" || text$="应用" || text="了解更多" || text="查看详情"]',
          snapshotUrls: 'https://i.gkd.li/i/13296371',
        },
        {
          key: 2,
          name: '京东广告',
          activityIds: 'run.xbud.android.mvp.ui.other.MainActivity',
          matches:
            '@ImageView[childCount=0][text=null][visibleToUser=true] < FrameLayout[childCount=1] <3 FrameLayout[childCount=3] < FrameLayout[childCount=2] +5 FrameLayout[childCount=4] > [text^="扭动或点击"]',
          snapshotUrls: 'https://i.gkd.li/i/13296398',
        },
        {
          key: 3,
          name: '字节广告-1',
          activityIds:
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          matches:
            '@Image[text=""] < View +n View > View > TextView[text="广告"]',
          snapshotUrls: 'https://i.gkd.li/i/13414538',
        },
        {
          key: 4,
          name: '字节广告-2',
          activityIds:
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          matches: '[id="com.byted.pangle:id/tt_reward_full_count_down_after"]',
          snapshotUrls: 'https://i.gkd.li/i/13414544',
        },
      ],
    },
  ],
});
