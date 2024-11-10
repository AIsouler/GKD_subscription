import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'io.sbyd.app',
  name: '轻松阅',
  groups: [
    {
      key: 0,
      name: '全屏广告-弹窗广告',
      activityIds: 'io.sbyd.app.ui.book.read.ReadBookActivity',
      rules: [
        {
          key: 1,
          matches:
            'TextView < LinearLayout[childCount=2] < FrameLayout[childCount=2] > FrameLayout[childCount=1] > ImageView',
          snapshotUrls: 'https://i.gkd.li/i/13274336',
        },
        {
          key: 2,
          fastQuery: true,
          matches:
            '@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null][parent.childCount>3] +n FrameLayout >(1,2) [text^="立即" || text="查看详情" || text="了解更多" || text="去微信看看" || text$="应用" || text="进入小程序" || text="领取优惠" || text="跳转微信"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13302326',
            'https://i.gkd.li/i/13313576',
            'https://i.gkd.li/i/13313624',
            'https://i.gkd.li/i/13313576',
          ],
        },
        {
          key: 4,
          activityIds:
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          matches:
            '@Image[childCount=0][text=""] < View[childCount=1] + View[childCount=1][text=""] +n View >(1,2) View[childCount=1] > [text$="广告"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12925095',
            'https://i.gkd.li/i/12925052',
          ],
        },
      ],
    },
  ],
});
