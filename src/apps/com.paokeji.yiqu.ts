import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.paokeji.yiqu',
  name: '喵趣漫画',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      resetMatch: 'app',
      actionMaximum: 1,
      rules:
        'FrameLayout > FrameLayout[childCount>2] > @View[clickable=true] + TextView',
      snapshotUrls: [
        'https://i.gkd.li/i/14031922',
        'https://i.gkd.li/i/14322264',
      ],
    },
    {
      key: 1,
      name: '局部广告',
      activityIds: [
        'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Activity_T',
        'com.aster.comic.app.view.MainActivity',
        'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
      ],
      rules: [
        {
          key: 0,
          name: '腾讯SDK',
          actionDelay: 350, //防误触
          matches:
            '[id="android:id/content"] >(-n+4) FrameLayout > FrameLayout[childCount=1] > ImageView[index=0 && id!=null]',
          snapshotUrls: [
            'https://i.gkd.li/i/13830354',
            'https://i.gkd.li/i/13842716',
            'https://i.gkd.li/i/13842966',
          ],
        },
        {
          key: 1,
          name: '字节SDK',
          matches: 'FrameLayout[desc*="close"] > View',
          snapshotUrls: [
            'https://i.gkd.li/i/13839432',
            'https://i.gkd.li/i/13839519',
          ],
        },
        {
          key: 2,
          name: '穿山甲SDK',
          actionDelay: 350, //防误触
          matches: [
            '[id="com.byted.pangle.m:id/tt_reward_full_count_down_after"]',
            '[text="反馈"] <<n View + View[childCount=1]',
            '[text*="跳过" && text.length<=6] <2 @View -(3-n) View < View',
            '[text="反馈"] -n @View[index<=1] > Image[text.length=0]',
            '[text="反馈"] <<n View - View[childCount=1]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/13830798', //规则2
            'https://i.gkd.li/i/13810767', //规则1
            'https://i.gkd.li/i/13829749', //规则3
            'https://i.gkd.li/i/13809737', //规则4 index=0
            'https://i.gkd.li/i/13809578', //规则4 index=1
            'https://i.gkd.li/i/13810150', //规则5
          ],
        },
        {
          key: 3,
          name: '快手SDK',
          matches: [
            '[text*="跳过"] <n *[clickable=true]',
            '[vid="ksad_auto_close_btn"]',
            '[vid="ksad_video_container"] < * >n ViewGroup[index=1] >n @ViewGroup[clickable=true] > ImageView',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/13809629', //规则1
            'https://i.gkd.li/i/13829312', //规则3
            'https://i.gkd.li/i/13837855', //规则2
          ],
        },
      ],
    },
    {
      key: 2,
      name: '更新提示',
      desc: '点击"暂不"',
      matchTime: 10000,
      quickFind: true,
      resetMatch: 'app',
      actionMaximum: 1,
      rules: [
        {
          matches: '[id="com.paokeji.yiqu:id/btnCancel"]',
          exampleUrls:
            'https://m.gkd.li/57941037/2ce54292-bfc6-41c6-b2e5-e7d8302fc522',
          snapshotUrls: 'https://i.gkd.li/i/14140265',
        },
      ],
    },
    {
      key: 3,
      name: '全屏广告-广告弹窗',
      rules: [
        {
          key: 0,
          activityIds:
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          matches: '[text="反馈"] + View[childCount=2][text=""]',
          exampleUrls:
            'https://m.gkd.li/57941037/6f12fd12-b956-474a-834c-8ebba00efbff',
          snapshotUrls: 'https://i.gkd.li/i/14362119',
        },
      ],
    },
  ],
});
