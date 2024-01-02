import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'io.sbyd.app',
  name: '轻松阅',
  groups: [
    {
      key: 0,
      name: '弹窗广告',
      activityIds: 'io.sbyd.app.ui.book.read.ReadBookActivity',
      rules: [
        {
          key: 1,
          matches:
            'TextView < LinearLayout[childCount=2] < FrameLayout[childCount=2] > FrameLayout[childCount=1] > ImageView',
          snapshotUrls: 'https://i.gkd.li/import/13274336',
        },
        {
          key: 2,
          matches: [
            '[text^="立即" || text^="查看" || text^="领取"][text.length=4]', // 立即抢购,立即下载,立即申请,查看详情,领取优惠
            '[id="android:id/content"] >2 FrameLayout[childCount=3||childCount=2] > FrameLayout[childCount=5||childCount=6||childCount=8] > FrameLayout[childCount=1] > ImageView[text=null][visibleToUser=true]', // 非广告页面下没有这种节点,不会误触
          ],
          snapshotUrls: [
            'https://i.gkd.li/import/13302326',
            'https://i.gkd.li/import/13313576',
            'https://i.gkd.li/import/13313624',
            'https://i.gkd.li/import/13313576',
          ],
        },
        {
          key: 3,
          activityIds:
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          matches: '[text="反馈"] -2 @View - Image',
          snapshotUrls: 'https://i.gkd.li/import/12925052',
        },
        {
          key: 4,
          activityIds:
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          matches: '[text="反馈"] -4 @View < View[childCount=7]',
          snapshotUrls: 'https://i.gkd.li/import/12925095',
        },
      ],
    },
  ],
});
