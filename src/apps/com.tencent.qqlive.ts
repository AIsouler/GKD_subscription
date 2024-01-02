import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.tencent.qqlive',
  name: '腾讯视频',
  deprecatedKeys: [5, 19],
  groups: [
    {
      key: 1,
      name: '青少年模式弹窗',
      actionMaximum: 1,
      resetMatch: 'app',
      quickFind: true,
      rules: 'TextView[text*="青少年模式"] +n TextView[text="我知道了"]',
      snapshotUrls: 'https://i.gkd.li/import/12700145',
    },
    {
      key: 2,
      name: '更新弹窗',
      actionMaximum: 1,
      resetMatch: 'app',
      rules:
        '[text^="有新版本"] + FrameLayout + LinearLayout + [text="暂不升级"]',
      snapshotUrls: [
        'https://i.gkd.li/import/12700486',
        'https://i.gkd.li/import/13799951',
      ],
    },
    {
      key: 3,
      name: '卡片式广告',
      rules: [
        {
          key: 0,
          name: '首页顶部卡片广告',
          activityIds: 'com.tencent.qqlive.ona.activity.SplashHomeActivity',
          matches:
            'FrameLayout - RelativeLayout > RelativeLayout > FrameLayout + ImageView[clickable=true][childCount=0][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/import/12700299',
            'https://i.gkd.li/import/12700302',
            'https://i.gkd.li/import/13685929', // 限定 visibleToUser=true 防止误触
          ],
        },
        {
          key: 1,
          name: '首页顶部背景广告',
          activityIds: 'com.tencent.qqlive.ona.activity.SplashHomeActivity',
          matches: '[text="关闭广告"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/import/12700518',
        },
        {
          key: 2,
          name: '个人中心页卡片广告',
          activityIds: [
            'com.tencent.qqlive.ona.activity.SplashHomeActivity',
            'com.tencent.qqlive.ona.offline.client.group.DownloadGroupActivity',
          ],
          matches:
            'ViewGroup > TextView + LinearLayout[childCount=2] + ImageView[clickable=true]',
          snapshotUrls: [
            'https://i.gkd.li/import/12700175',
            'https://i.gkd.li/import/13759380',
          ],
        },
        {
          key: 3,
          name: '个人中心页顶部背景广告',
          activityIds: 'com.tencent.qqlive.ona.activity.SplashHomeActivity',
          matches:
            'RelativeLayout > FrameLayout + @ImageView[clickable=true] + ImageView + ImageView',
          snapshotUrls: 'https://i.gkd.li/import/12777344',
        },
        {
          key: 4,
          name: '点击右上角[广告]',
          activityIds: [
            'com.tencent.qqlive.ona.activity.SplashHomeActivity',
            'com.tencent.qqlive.ona.activity.VideoDetailActivity',
          ],
          matches:
            'RelativeLayout[id=null] > @FrameLayout[clickable=true][id!=null] > ImageView[desc="the ad tag"]',
          snapshotUrls: [
            'https://i.gkd.li/import/12737313',
            'https://i.gkd.li/import/13685842',
          ],
        },
        {
          key: 5,
          name: '点击右下角关闭',
          matches:
            'ImageView[childCount=0] <<2 RelativeLayout + FrameLayout + RelativeLayout > RelativeLayout > RelativeLayout > ImageView',
          snapshotUrls: 'https://i.gkd.li/import/13426421',
        },
        // 以下是配合本规则组内其他key使用的规则，反馈界面的规则都是一样的
        {
          key: 97,
          name: '广告反馈卡片-点击不感兴趣',
          activityIds: 'com.tencent.qqlive.ona.activity.SplashHomeActivity',
          matches: 'LinearLayout > [text="不感兴趣"]',
          snapshotUrls: 'https://i.gkd.li/import/13695084',
        },
        {
          key: 98,
          name: '广告反馈卡片-选择原因',
          quickFind: true,
          activityIds: [
            'com.tencent.qqlive.qaduikit.common.dialog.feedback.variable.QAdFeedbackVariableDislikeItemDialog',
            'com.tencent.qqlive.ona.activity.SplashHomeActivity',
            'com.tencent.qqlive.ona.activity.VideoDetailActivity',
            'com.tencent.qqlive.ona.offline.client.group.DownloadGroupActivity',
          ],
          matches:
            '[text="关闭这条广告的原因"] +(2) RecyclerView > [text="不感兴趣"]',
          snapshotUrls: [
            'https://i.gkd.li/import/12700303',
            'https://i.gkd.li/import/12829866',
            'https://i.gkd.li/import/13685871',
            'https://i.gkd.li/import/13703219',
          ],
        },
        {
          preKeys: [98],
          key: 99,
          name: '广告反馈卡片-确认原因',
          quickFind: true,
          activityIds: [
            'com.tencent.qqlive.qaduikit.common.dialog.feedback.variable.QAdFeedbackVariableDislikeItemDialog',
            'com.tencent.qqlive.ona.activity.SplashHomeActivity',
            'com.tencent.qqlive.ona.activity.VideoDetailActivity',
            'com.tencent.qqlive.ona.offline.client.group.DownloadGroupActivity',
          ],
          matches:
            '[text="关闭这条广告的原因"] + [text="确认"][clickable=true]',
          snapshotUrls: [
            'https://i.gkd.li/import/12700210',
            'https://i.gkd.li/import/13685877',
            'https://i.gkd.li/import/13703298',
          ],
        },
      ],
    },
    {
      key: 4,
      name: '视频播放时的广告',
      desc: '自动点击 跳过广告',
      activityIds: 'com.tencent.qqlive.ona.activity.VideoDetailActivity',
      rules: [
        {
          key: 0,
          name: '全屏广告',
          quickFind: true,
          matches:
            '@[text$="跳过广告"][clickable=true] < LinearLayout > [text="VIP可关闭该广告"]',
          snapshotUrls: [
            'https://i.gkd.li/import/12700407',
            'https://i.gkd.li/import/12700433',
          ],
        },
        {
          key: 1,
          name: '左下角悬浮广告',
          matches:
            'FrameLayout[childCount=2] > FrameLayout > RelativeLayout > View[id!=null][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/import/13043079',
        },
        {
          key: 2,
          name: '全屏广告2',
          quickFind: true,
          matches: '@[text$="关闭广告"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/import/13526547',
        },
        {
          key: 3,
          name: '居中广告',
          matches:
            'FrameLayout[childCount=4] > ImageView + FrameLayout + FrameLayout + ImageView[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/import/13695067',
        },
      ],
    },
    {
      enable: false,
      key: 20,
      name: '请求通知权限弹窗',
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          actionMaximum: 1,
          quickFind: true,
          matches: 'LinearLayout > @[text="以后再说"] + [text="好的"]',
          snapshotUrls: 'https://i.gkd.li/import/12700139',
        },
        {
          key: 1,
          actionMaximumKey: 0,
          matches: '@ImageView + * > [text^="开启通知"]',
          snapshotUrls: 'https://i.gkd.li/import/13670465',
        },
      ],
    },
  ],
});
