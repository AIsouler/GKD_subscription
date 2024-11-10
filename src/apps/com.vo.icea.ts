import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.vo.icea',
  name: '飞韵听书',
  groups: [
    {
      key: 5,
      name: '分段广告-播放界面卡片广告',
      desc: '需点击二次弹窗关闭原因',
      fastQuery: true,
      activityIds: [
        'com.vo.icea.MainActivity',
        'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
      ],
      rules: [
        {
          key: 0,
          name: '点击"反馈"',
          matches: 'WebView @[text="反馈"] - View > Image',
          snapshotUrls: 'https://i.gkd.li/i/13510973',
        },
        {
          preKeys: 0,
          name: '原因选"不感兴趣"',
          matches: '@LinearLayout[clickable=true] > [text="不感兴趣"]',
          snapshotUrls: 'https://i.gkd.li/i/13510972',
        },
      ],
    },
    {
      key: 6,
      name: '全屏广告-首页弹窗广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: 'com.vo.icea.MainActivity',
      rules: [
        //字节穿山甲广告SDK: key0-4
        {
          key: 0,
          fastQuery: true,
          matches: '[id="com.byted.pangle:id/tt_reward_full_count_down"]',
          snapshotUrls: 'https://i.gkd.li/i/13511052',
        },
        {
          key: 1,
          fastQuery: true,
          matches:
            '@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null][parent.childCount>3] +n FrameLayout >(1,2) [text^="立即" || text="查看详情" || text="了解更多" || text="去微信看看" || text$="应用" || text="进入小程序" || text="领取优惠" || text="跳转微信"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13511059',
            'https://i.gkd.li/i/13511065',
          ],
        },
        {
          key: 2,
          name: '类型2',
          matches: '[text="反馈"] -n View > Image[text=""][width<60]',
          snapshotUrls: [
            'https://i.gkd.li/i/13511052',
            'https://i.gkd.li/i/13511765',
          ],
        },
        {
          key: 3,
          name: '类型3',
          matches: '[text="反馈"] < View [text*="跳过"][text.length<=10]',
          snapshotUrls: 'https://i.gkd.li/i/13446063',
        },
        {
          key: 4,
          fastQuery: true,
          activityIds: '.MainActivity',
          matches:
            '@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null] <2 FrameLayout[childCount=5] + FrameLayout[childCount=2] > [text^="立即" || text="查看详情" || text="了解更多" || text="去逛逛" || text="去微信看看" || text$="应用" || text="进入小程序" || text="领取优惠" || text="跳转微信"]',
          exampleUrls: 'https://e.gkd.li/396d9536-af27-4470-9d80-0a11456fc9ea',
          snapshotUrls: 'https://i.gkd.li/i/17691639',
        },
        {
          key: 5,
          fastQuery: true,
          activityIds: '.MainActivity',
          matches:
            '@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null] - FrameLayout[childCount>2] >3 [text^="立即" || text$="应用" || text="了解更多" || text="查看详情"]',
          exampleUrls: 'https://e.gkd.li/c5d254c2-97cb-4ab1-a271-d409b9841e94',
          snapshotUrls: 'https://i.gkd.li/i/13511708',
        },
      ],
    },
  ],
});
