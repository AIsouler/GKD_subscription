import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.tencent.qqlive',
  name: '腾讯视频',
  deprecatedKeys: [5, 19],
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: 'FrameLayout[id=null] > TextView[text="跳过"][id=null]',
      snapshotUrls: [
        'https://i.gkd.li/import/12700227',
        'https://i.gkd.li/import/12700122',
        'https://i.gkd.li/import/12700541',
        'https://i.gkd.li/import/12910953',
      ],
    },
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
      quickFind: true,
      rules:
        '@[text="暂不升级"] - LinearLayout > FrameLayout > [text="立即升级"]',
      snapshotUrls: 'https://i.gkd.li/import/12700486',
    },
    {
      enable: false,
      key: 3,
      name: '卡片式广告',
      activityIds: 'com.tencent.qqlive.ona.activity.SplashHomeActivity',
      rules: [
        {
          key: 0,
          name: '首页顶部卡片广告',
          matches:
            'FrameLayout - RelativeLayout > RelativeLayout > FrameLayout + ImageView[clickable=true][childCount=0]',
          snapshotUrls: [
            'https://i.gkd.li/import/12700299',
            'https://i.gkd.li/import/12700302',
          ],
        },
        {
          key: 1,
          name: '首页顶部背景广告',
          matches: '[text="关闭广告"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/import/12700518',
        },
        {
          key: 2,
          name: '个人中心页中间卡片广告',
          matches:
            'ViewGroup > TextView + LinearLayout[childCount=2] + ImageView[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/import/12700175',
        },
        {
          key: 3,
          name: '个人中心页顶部背景广告',
          matches:
            'RelativeLayout > FrameLayout + @ImageView[clickable=true] + ImageView + ImageView',
          snapshotUrls: 'https://i.gkd.li/import/12777344',
        },
        {
          key: 4,
          name: '点击右上角[广告]',
          matches:
            'RelativeLayout[id=null] > @FrameLayout[clickable=true][id!=null] > ImageView[desc="the ad tag"]',
          snapshotUrls: 'https://i.gkd.li/import/12737313',
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
          key: 98,
          name: '广告反馈卡片-选择原因',
          quickFind: true,
          activityIds: [
            'com.tencent.qqlive.qaduikit.common.dialog.feedback.variable.QAdFeedbackVariableDislikeItemDialog',
            'com.tencent.qqlive.ona.activity.SplashHomeActivity',
          ],
          matches:
            '[text="关闭这条广告的原因"] +(2) RecyclerView > [text="不感兴趣"]',
          snapshotUrls: [
            'https://i.gkd.li/import/12700303',
            'https://i.gkd.li/import/12829866',
          ],
        },
        {
          preKeys: [98],
          key: 99,
          name: '广告反馈卡片-确认',
          quickFind: true,
          activityIds: [
            'com.tencent.qqlive.qaduikit.common.dialog.feedback.variable.QAdFeedbackVariableDislikeItemDialog',
            'com.tencent.qqlive.ona.activity.SplashHomeActivity',
          ],
          matches:
            '[text="关闭这条广告的原因"] + [text="确认"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/import/12700210',
        },
      ],
    },
    {
      key: 4,
      name: '视频播放时的广告',
      desc: '自动点击 跳过广告',
      activityIds: ['com.tencent.qqlive.ona.activity.VideoDetailActivity'],
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
