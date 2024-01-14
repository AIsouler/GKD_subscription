import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.paokeji.yiqu',
  name: '喵趣漫画',
  groups: [
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
            'https://i.gkd.li/import/13830354',
            'https://i.gkd.li/import/13842716',
            'https://i.gkd.li/import/13842966',
          ],
        },
        {
          key: 1,
          name: '字节SDK',
          matches: 'FrameLayout[desc*="close"] > View',
          snapshotUrls: [
            'https://i.gkd.li/import/13839432',
            'https://i.gkd.li/import/13839519',
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
            'https://i.gkd.li/import/13830798', //规则2
            'https://i.gkd.li/import/13810767', //规则1
            'https://i.gkd.li/import/13829749', //规则3
            'https://i.gkd.li/import/13809737', //规则4 index=0
            'https://i.gkd.li/import/13809578', //规则4 index=1
            'https://i.gkd.li/import/13810150', //规则5
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
            'https://i.gkd.li/import/13809629', //规则1
            'https://i.gkd.li/import/13829312', //规则3
            'https://i.gkd.li/import/13837855', //规则2
          ],
        },
      ],
    },
  ],
});
